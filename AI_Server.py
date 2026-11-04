import os
import subprocess
import uvicorn
from starlette.applications import Starlette
from starlette.routing import Route
from starlette.requests import Request
from starlette.responses import JSONResponse, Response
from mcp.server.fastmcp import FastMCP
from mcp.server.sse import SseServerTransport
from pyngrok import ngrok

# Initialize FastMCP
mcp = FastMCP("ProjectBuilder")

# 1. Tool to write or create files
@mcp.tool()
def write_file(filepath: str, content: str) -> str:
    "Creates or overwrites a file with the specified text content."
    try:
        os.makedirs(os.path.dirname(os.path.abspath(filepath)), exist_ok=True)
        with open(filepath, "w", encoding="utf-8") as f:
            f.write(content)
        return f"Successfully created/updated {filepath}"
    except Exception as e:
        return f"Error writing file: {str(e)}"

# 2. Tool to inspect directory structure
@mcp.tool()
def list_directory(path: str = ".") -> str:
    """Lists files and folders at the given path."""
    try:
        items = os.listdir(path)
        return "\n".join(items) if items else "Directory is empty."
    except Exception as e:
        return f"Error listing directory: {str(e)}"

# 3. Tool to read existing files
@mcp.tool()
def read_file(filepath: str) -> str:
    """Reads the contents of an existing file."""
    try:
        with open(filepath, "r", encoding="utf-8") as f:
            return f.read()
    except Exception as e:
        return f"Error reading file: {str(e)}"

# 4. Tool to run terminal commands
@mcp.tool()
def run_command(command: str) -> str:
    """Runs a shell/terminal command and returns stdout and stderr."""
    try:
        result = subprocess.run(
            command,
            shell=True,
            capture_output=True,
            text=True,
            timeout=60
        )
        output = result.stdout + result.stderr
        return output if output.strip() else "Command executed with no output."
    except Exception as e:
        return f"Command failed: {str(e)}"

# SSE transport for legacy streaming clients
sse = SseServerTransport("/messages/")

async def handle_sse_stream(request: Request):
    """Handles GET/HEAD stream initialization."""
    if request.method == "HEAD":
        return Response(status_code=200, media_type="text/event-stream")
    async with sse.connect_sse(request.scope, request.receive, request._send) as streams:
        await mcp._mcp_server.run(
            streams[0], streams[1], mcp._mcp_server.create_initialization_options()
        )

async def handle_sse_messages(request: Request):
    """Handles messages with session_id query parameters."""
    await sse.handle_post_message(request.scope, request.receive, request._send)

async def handle_stateless_post(request: Request):
    """
    Handles direct JSON-RPC POST requests sent by modern web MCP clients
    which do not pass session_id.
    """
    if "session_id" in request.query_params:
        await sse.handle_post_message(request.scope, request.receive, request._send)
        return

    try:
        body = await request.json()
    except Exception:
        return JSONResponse({"jsonrpc": "2.0", "error": {"code": -32700, "message": "Parse error"}, "id": None}, status_code=400)

    # Handshake / initialize request
    if body.get("method") == "initialize":
        return JSONResponse({
            "jsonrpc": "2.0",
            "id": body.get("id"),
            "result": {
                "protocolVersion": "2024-11-05",
                "capabilities": {
                    "tools": {"listChanged": False}
                },
                "serverInfo": {
                    "name": "ProjectBuilder",
                    "version": "1.0.0"
                }
            }
        })
    elif body.get("method") == "notifications/initialized":
        return Response(status_code=204)
    
    # Tool Discovery Request
    elif body.get("method") == "tools/list":
        tools_list = []
        for tool in await mcp.list_tools():
            # Extract schema safely avoiding AttributeError
            schema = getattr(tool, "inputSchema", {})
            if not schema and hasattr(tool, "parameters"):
                if hasattr(tool.parameters, "model_dump"):
                    schema = tool.parameters.model_dump()
                elif isinstance(tool.parameters, dict):
                    schema = tool.parameters
                    
            tools_list.append({
                "name": tool.name,
                "description": tool.description,
                "inputSchema": schema
            })
            
        return JSONResponse({
            "jsonrpc": "2.0",
            "id": body.get("id"),
            "result": {"tools": tools_list}
        })
        
    # Tool Execution Request
    elif body.get("method") == "tools/call":
        params = body.get("params", {})
        name = params.get("name")
        arguments = params.get("arguments", {})
        try:
            result = await mcp.call_tool(name, arguments)
            content = []
            if isinstance(result, list):
                for item in result:
                    content.append({"type": "text", "text": str(getattr(item, "text", item))})
            else:
                content.append({"type": "text", "text": str(result)})

            return JSONResponse({
                "jsonrpc": "2.0",
                "id": body.get("id"),
                "result": {"content": content, "isError": False}
            })
        except Exception as err:
            return JSONResponse({
                "jsonrpc": "2.0",
                "id": body.get("id"),
                "result": {"content": [{"type": "text", "text": str(err)}], "isError": True}
            })

    return JSONResponse({
        "jsonrpc": "2.0",
        "id": body.get("id"),
        "error": {"code": -32601, "message": f"Method {body.get('method')} not found"}
    }, status_code=404)

# Register routes for /, /mcp, /sse, and /messages/
routes = [
    Route("/sse", endpoint=handle_sse_stream, methods=["GET", "HEAD"]),
    Route("/sse", endpoint=handle_stateless_post, methods=["POST"]),
    Route("/mcp", endpoint=handle_sse_stream, methods=["GET", "HEAD"]),
    Route("/mcp", endpoint=handle_stateless_post, methods=["POST"]),
    Route("/messages/", endpoint=handle_sse_messages, methods=["POST"]),
    Route("/", endpoint=handle_sse_stream, methods=["GET", "HEAD"]),
    Route("/", endpoint=handle_stateless_post, methods=["POST"]),
]

app = Starlette(routes=routes)

if __name__ == "__main__":
    tunnel = ngrok.connect(8000, host_header="rewrite")
    base_url = tunnel.public_url.replace("http://", "https://")

    print("\n" + "=" * 60)
    print("🚀 MCP SERVER READY")
    print(f"👉 Use URL: {base_url}/mcp")
    print("=" * 60 + "\n")

    uvicorn.run(app, host="0.0.0.0", port=8000)