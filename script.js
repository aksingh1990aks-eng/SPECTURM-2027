/* =========================
   TECHNICAL TRACKS (SPECTRAM 2027)
========================= */
const tracks = [
  {
    id: "01",
    title: "SIGNAL PROCESSING",
    subtitle: "Transforming Signals into Intelligence",
    description: "Enabling Seamless Intelligence through 5G/6G, Integrated Networks, and Ubiquitous Wireless Connectivity",
    color: "#3060A0", 
    topics: [
      "Fundamentals of Signal Processing",
      "AI/ML in Signal Processing",
      "Digital Image Processing",
      "Image, Video and Computer Vision",
      "Audio and Speech Processing",
      "Array, Multichannel and Sensor Signal Processing",
      "Signal Processing for 5G/6G Communications",
      "Radar, Sonar and Remote Sensing",
      "Biomedical Signal and Image Processing",
      "Sparse, Compressive and High-Dimensional Processing",
      "Multimedia and Multimodal Signal Processing",
      "IoT, Edge Intelligence and Cyber-Physical Systems",
      "Signal Processing Algorithms, Architectures and VLSI",
      "Security, Forensics and Information Processing",
      "Computational Imaging and Inverse Problems",
      "Emerging and Interdisciplinary Applications",
      "Statistical, Adaptive and Intelligent Signal Processing",
      "Radar, Biomedical and Remote-Sensing Signal Processing"
    ]
  },
  {
    id: "02",
    title: "COMMUNICATION",
    subtitle: "Communication for a Connected World",
    description: "Transforming Electromagnetic Apertures through Intelligent Surfaces, Beamforming, and Advanced Array Architectures",
    color: "#002050", 
    topics: [
      "Communication Theory and Information Theory",
      "Wireless Communication Systems and Networks",
      "6G and Next-Generation Wireless Technologies",
      "MIMO, Massive MIMO and Advanced Beamforming",
      "mmWave, Sub-THz and Terahertz Communications",
      "Reconfigurable Intelligent Surfaces and Smart Radio Environments",
      "AI/ML for Wireless Communications and Networking",
      "IoT, Industrial IoT and Machine-Type Communications",
      "Wireless Networks, Edge Computing and Network Intelligence",
      "Satellite, Non-Terrestrial and Aerial Communications",
      "Integrated Sensing, Localization and Communications",
      "Optical, Free-Space and Fiber-Optic Communications",
      "Vehicular, V2X and Autonomous Communications",
      "Communication Security, Privacy and Reliability",
      "Emerging Communication Technologies and Applications"
    ]
  },
  {
    id: "03",
    title: "RF & MICROWAVE",
    subtitle: "Advancing RF and Microwave Frontiers",
    description: "Harnessing the Spectrum through RF Innovation, Microwave Engineering, and Intelligent Electromagnetics",
    color: "#45D9F5", 
    topics: [
      "Passive RF Circuits and Components",
      "Active RF/Microwave Circuits",
      "RF Devices and Components",
      "Millimeter-Wave Circuits",
      "Microwave and mmWave Imaging",
      "Wireless Power Transmission",
      "Electromagnetic Interference and Compatibility",
      "Optimization of Passive and Active RF Circuits",
      "Microwave and mmWave Antennas",
      "Antenna Theory",
      "Antenna Array Design",
      "Satellite Antennas",
      "Array Antennas",
      "Metamaterials and Metasurfaces",
      "Measurement and Applications",
      "Antennas on handheld and ground terminals",
      "Antenna Measurements & RCS",
      "Computational Electromagnetics",
      "Reflector and Reflectarray Antenna",
      "Wearable Circuits and Antennas",
      "Radar Circuits and Antennas",
      "Microwave and mmWave Absorbers",
      "THz Absorbers and Sensors",
      "AI-Assisted RF Circuits and Antennas",
      "Emerging RF and Microwave Circuits",
      "Modern Antennas & Antenna Array",
      "AI/ML in RF and Microwave"
    ]
  }
];

const tracksGrid = document.getElementById("tracksGrid");
if (tracksGrid) {
tracksGrid.innerHTML = ""; 

tracks.forEach((track) => {
  const topicsHtml = track.topics.map(topic => `<li>${topic}</li>`).join("");
  
  tracksGrid.innerHTML += `
    <div class="thematic-card" style="--track-color: ${track.color}">
      <div class="thematic-header">
        <div class="thematic-id" style="background: ${track.color}">${track.id}</div>
        <div class="thematic-title-group">
          <h3 style="color: ${track.color}">${track.title}</h3>
          <h4>${track.subtitle}</h4>
        </div>
      </div>
      <p class="thematic-desc" style="color: ${track.color}">${track.description}</p>
      <ul class="thematic-list">
        ${topicsHtml}
      </ul>
    </div>
  `;
});
}

/* =========================
   MOBILE MENU
========================= */
const menuButton = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

if (menuButton && nav) {
  menuButton.addEventListener("click", () => nav.classList.toggle("open"));
}

document.querySelectorAll("nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
  });
});

/* =========================
   COMMITTEE TAB LOGIC
========================= */
const committeeTabs = document.querySelectorAll('.committee-tab');
const committeePanels = document.querySelectorAll('.committee-panel');

committeeTabs.forEach(tab => {
  tab.addEventListener('click', () => {
    // Remove active class from all tabs and panels
    committeeTabs.forEach(t => t.classList.remove('active'));
    committeePanels.forEach(p => p.classList.remove('active'));

    // Add active class to clicked tab
    tab.classList.add('active');

    // Find and show the corresponding panel
    const targetId = tab.getAttribute('data-target');
    const targetPanel = document.getElementById(targetId);
    
    if (targetPanel) {
      targetPanel.classList.add('active');
    }
  });
});

/* =========================
   BACK TO TOP
========================= */
const topButton = document.getElementById("topButton");

if (topButton) {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 500) {
      topButton.style.display = "grid";
      topButton.classList.add("show");
    } else {
      topButton.style.display = "none";
      topButton.classList.remove("show");
    }
  });
  topButton.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));
}

/* =========================
   FOOTER YEAR
========================= */
const yearElement = document.getElementById("year");
if (yearElement) yearElement.textContent = new Date().getFullYear();
/* =========================
   IMAGE SLIDESHOW
========================= */
const track = document.getElementById('sliderTrack');
const slides = document.querySelectorAll('.slide');
const nextBtn = document.getElementById('nextBtn');
const prevBtn = document.getElementById('prevBtn');

if (track && slides.length > 0) {
  let currentIndex = 0;
  const slideCount = slides.length;
  let autoSlideTimer;

  // Function to move the slider
  function updateSlider() {
    track.style.transform = `translateX(-${currentIndex * 100}%)`;
  }

  // Next Slide Logic
  function goToNextSlide() {
    currentIndex = (currentIndex === slideCount - 1) ? 0 : currentIndex + 1;
    updateSlider();
  }

  // Prev Slide Logic
  function goToPrevSlide() {
    currentIndex = (currentIndex === 0) ? slideCount - 1 : currentIndex - 1;
    updateSlider();
  }

  // Event Listeners for arrows
  if (nextBtn) {
    nextBtn.addEventListener('click', () => {
      goToNextSlide();
      resetTimer(); // Reset auto-play so it doesn't immediately slide again
    });
  }

  if (prevBtn) {
    prevBtn.addEventListener('click', () => {
      goToPrevSlide();
      resetTimer();
    });
  }

  // Auto-play interval (slides every 4 seconds)
  function startAutoSlide() {
    autoSlideTimer = setInterval(goToNextSlide, 4000);
  }

  function resetTimer() {
    clearInterval(autoSlideTimer);
    startAutoSlide();
  }

  // Initialize auto-play
  startAutoSlide();
}
/* =========================
   AUTHOR & TRAVEL NAV DROPDOWNS
========================= */
document.querySelectorAll(".nav-drop-toggle").forEach(button => {
  button.addEventListener("click", event => {
    event.preventDefault();
    const dropdown = button.closest(".nav-dropdown");
    const willOpen = !dropdown.classList.contains("open");

    // Keep the top-level dropdowns mutually exclusive on touch and small screens.
    document.querySelectorAll(".nav-dropdown.open").forEach(item => {
      item.classList.remove("open");
      const toggle = item.querySelector(".nav-drop-toggle");
      if (toggle) toggle.setAttribute("aria-expanded", "false");
    });

    if (willOpen) {
      dropdown.classList.add("open");
      button.setAttribute("aria-expanded", "true");
    } else {
      button.setAttribute("aria-expanded", "false");
    }
  });
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    document.querySelectorAll(".nav-dropdown.open").forEach(item => {
      item.classList.remove("open");
      const toggle = item.querySelector(".nav-drop-toggle");
      if (toggle) {
        toggle.setAttribute("aria-expanded", "false");
        toggle.focus();
      }
    });
  }
});

// Subtle paint wash follows the pointer only while hovering technical-track cards.
document.querySelectorAll('.track-preview-card').forEach((card) => {
  card.addEventListener('pointermove', (event) => {
    if (event.pointerType === 'touch') return;
    const rect = card.getBoundingClientRect();
    card.style.setProperty('--paint-x', (event.clientX - rect.left) + 'px');
    card.style.setProperty('--paint-y', (event.clientY - rect.top) + 'px');
  });
  card.addEventListener('pointerleave', () => {
    card.style.setProperty('--paint-x', '50%');
    card.style.setProperty('--paint-y', '50%');
  });
});


/* SPECTRAM homepage gallery: auto-advancing, keyboard-friendly image slideshow */
(() => {
  const gallery = document.getElementById("spectram-gallery");
  if (!gallery) return;
  const track = document.getElementById("gallery-track");
  const slides = Array.from(track.querySelectorAll(".gallery-slide"));
  const dots = document.getElementById("gallery-dots");
  const counter = document.getElementById("gallery-counter");
  const prev = document.getElementById("gallery-prev");
  const next = document.getElementById("gallery-next");
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let current = 0, timer = null;
  slides.forEach((slide, index) => {
    const dot = document.createElement("button"); dot.type = "button"; dot.className = "gallery-dot";
    dot.setAttribute("aria-label", "Show image " + (index + 1)); dot.setAttribute("aria-current", index === 0 ? "true" : "false");
    dot.addEventListener("click", () => show(index, true)); dots.appendChild(dot);
  });
  const dotButtons = Array.from(dots.querySelectorAll(".gallery-dot"));
  function show(index, userInitiated = false) {
    current = (index + slides.length) % slides.length;
    track.style.transform = "translateX(-" + (current * 100) + "%)";
    slides.forEach((slide, i) => slide.classList.toggle("is-active", i === current));
    dotButtons.forEach((dot, i) => dot.setAttribute("aria-current", i === current ? "true" : "false"));
    counter.textContent = String(current + 1).padStart(2, "0") + " / " + String(slides.length).padStart(2, "0");
    if (userInitiated) start();
  }
  function stop() { if (timer) window.clearInterval(timer); timer = null; }
  function start() { stop(); if (!reduceMotion) timer = window.setInterval(() => show(current + 1), 5000); }
  prev.addEventListener("click", () => show(current - 1, true));
  next.addEventListener("click", () => show(current + 1, true));
  // Keep autoplay running even when the pointer is over the gallery.
  // Manual controls still work and reset the autoplay interval.
  gallery.addEventListener("keydown", event => { if (event.key === "ArrowLeft") show(current - 1, true); if (event.key === "ArrowRight") show(current + 1, true); });
  document.addEventListener("visibilitychange", () => document.hidden ? stop() : start());
  show(0); start();
})();


/* Homepage RF propagation wallpaper: random emitters, spreading waves, interference, respawns */
(() => {
  const canvas = document.getElementById("hero-signal-canvas");
  if (!canvas) return;
  const hero = canvas.closest(".hero");
  const ctx = canvas.getContext("2d", { alpha: true });
  if (!ctx) return;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
  const smallScreen = window.matchMedia("(max-width: 700px)");
  let width = 0, height = 0, dpr = 1, raf = 0, last = 0, emitters = [], waveId = 0;
  const waves = [];
  const rand = (min, max) => min + Math.random() * (max - min);
  function resize() {
    const rect = hero.getBoundingClientRect();
    width = Math.max(1, rect.width); height = Math.max(1, rect.height);
    dpr = Math.min(window.devicePixelRatio || 1, 1.6);
    canvas.width = Math.round(width * dpr); canvas.height = Math.round(height * dpr);
    canvas.style.width = width + "px"; canvas.style.height = height + "px";
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    emitters = Array.from({ length: 2 }, (_, i) => makeEmitter(i, true));
  }
  function makeEmitter(index, initial = false) {
    const padX = Math.min(70, width * .07), padY = Math.min(55, height * .1);
    return { x: rand(padX, Math.max(padX + 1, width - padX)), y: rand(padY, Math.max(padY + 1, height - padY)),
      phase: rand(0, Math.PI * 2), hue: Math.random() < .72 ? "cyan" : "violet",
      interval: rand(2.2, 3.8), next: initial ? rand(.1, 1.2) : rand(.8, 2.1), age: 0, index };
  }
  function spawn(e) {
    waves.push({ x: e.x, y: e.y, radius: 0, speed: rand(105, 155), max: Math.max(width, height) * rand(.52, .9),
      life: 0, duration: rand(4.2, 6.5), hue: e.hue, id: ++waveId, phase: e.phase });
    // A second harmonic pulse gives each transmission a recognisable signal train.
    waves.push({ x: e.x, y: e.y, radius: 0, speed: rand(92, 135), max: Math.max(width, height) * rand(.45, .78),
      life: 0, delay: .32, duration: rand(4, 5.8), hue: e.hue, id: ++waveId, phase: e.phase + .6 });
  }
  function drawWave(w) {
    if (w.life < (w.delay || 0)) return;
    const t = w.life - (w.delay || 0); w.radius = t * w.speed;
    const fade = Math.max(0, 1 - t / w.duration) * .28;
    if (fade <= 0 || w.radius > w.max) return;
    const color = w.hue === "cyan" ? [190,246,248] : [225,211,255];
    // Each front is drawn as a soft, fine ring plus a dotted carrier wave.
    ctx.beginPath(); ctx.arc(w.x, w.y, w.radius, 0, Math.PI * 2);
    ctx.strokeStyle = `rgba(${color.join(",")},${fade})`; ctx.lineWidth = 1.35; ctx.stroke();
    ctx.beginPath();
    const count = Math.max(24, Math.floor(w.radius * .55));
    for (let i = 0; i < count; i++) {
      const a = (i / count) * Math.PI * 2;
      const modulation = Math.sin(a * 7 + w.phase + t * 3.5) * 3.2;
      const r = w.radius + modulation;
      const x = w.x + Math.cos(a) * r, y = w.y + Math.sin(a) * r;
      if (i === 0) ctx.moveTo(x, y); else ctx.lineTo(x, y);
    }
    ctx.strokeStyle = `rgba(${color.join(",")},${fade * .4})`; ctx.lineWidth = .7; ctx.stroke();
  }
  function drawInterference() {
    // Interference is strongest where wavefronts from distinct transmitters overlap.
    for (let i = 0; i < waves.length; i++) {
      const a = waves[i]; if (a.life < (a.delay || 0) || a.radius > a.max) continue;
      for (let j = i + 1; j < waves.length; j++) {
        const b = waves[j]; if (b.life < (b.delay || 0) || b.radius > b.max || a.id > b.id) continue;
        const dx = b.x - a.x, dy = b.y - a.y, d = Math.hypot(dx, dy);
        if (d < 2 || d > a.radius + b.radius || d < Math.abs(a.radius - b.radius)) continue;
        const along = (a.radius * a.radius - b.radius * b.radius + d * d) / (2 * d);
        const h2 = a.radius * a.radius - along * along; if (h2 < 0) continue;
        const h = Math.sqrt(h2), xm = a.x + along * dx / d, ym = a.y + along * dy / d;
        const pts = [{ x: xm - h * dy / d, y: ym + h * dx / d }, { x: xm + h * dy / d, y: ym - h * dx / d }];
        const strength = Math.max(0, 1 - Math.abs(a.radius - b.radius) / 35);
        if (strength < .1) continue;
        ctx.fillStyle = `rgba(235,250,255,${strength * .2})`;
        pts.forEach(p => { if (p.x > 0 && p.x < width && p.y > 0 && p.y < height) { ctx.beginPath(); ctx.arc(p.x,p.y,1.6 + strength,0,Math.PI*2); ctx.fill(); } });
      }
    }
  }
  function drawEmitter(e, time) {
    const pulse = .5 + .5 * Math.sin(time * 2.3 + e.phase);
    const color = e.hue === "cyan" ? "190,246,248" : "225,211,255";
    const g = ctx.createRadialGradient(e.x,e.y,0,e.x,e.y,36 + pulse * 22);
    g.addColorStop(0,`rgba(${color},${.18 + pulse * .12})`); g.addColorStop(1,`rgba(${color},0)`);
    ctx.fillStyle = g; ctx.beginPath(); ctx.arc(e.x,e.y,52 + pulse * 12,0,Math.PI*2); ctx.fill();
    ctx.strokeStyle = `rgba(${color},${.42 + pulse * .2})`; ctx.lineWidth = 1;
    ctx.beginPath(); ctx.arc(e.x,e.y,6 + pulse * 2.5,0,Math.PI*2); ctx.stroke();
    ctx.fillStyle = `rgba(245,253,255,${.55 + pulse * .2})`; ctx.beginPath(); ctx.arc(e.x,e.y,1.8,0,Math.PI*2); ctx.fill();
  }
  function frame(now) {
    raf = 0;
    if (document.hidden || reduceMotion.matches) return;
    const dt = Math.min(.05, (now - (last || now)) / 1000); last = now;
    const time = now / 1000;
    ctx.clearRect(0, 0, width, height);
    emitters.forEach((e, i) => {
      e.age += dt; e.next -= dt;
      if (e.next <= 0) { spawn(e); e.next = e.interval; }
      drawEmitter(e, time + i * .2);
    });
    waves.forEach(w => { w.life += dt; drawWave(w); });
    drawInterference();
    for (let i = waves.length - 1; i >= 0; i--) if (waves[i].life > waves[i].duration + (waves[i].delay || 0) || waves[i].radius > waves[i].max + 10) waves.splice(i, 1);
    // Occasionally reposition one emitter; the new location begins its own pulse sequence.
    if (Math.random() < dt * .12 && emitters.length) {
      const idx = Math.floor(Math.random() * emitters.length), old = emitters[idx];
      if (old.age > 5) { emitters[idx] = makeEmitter(idx); emitters[idx].next = .25; }
    }
    raf = requestAnimationFrame(frame);
  }
  function stop() { if (raf) cancelAnimationFrame(raf); raf = 0; last = 0; }
  function start() { stop(); if (!document.hidden && !reduceMotion.matches) raf = requestAnimationFrame(frame); else { ctx.clearRect(0,0,width,height); } }
  resize(); start();
  window.addEventListener("resize", () => { resize(); start(); }, { passive: true });
  document.addEventListener("visibilitychange", start);
  reduceMotion.addEventListener?.("change", start);
})();

/* Sponsor logo carousel: centre logo is sharp, adjacent logos are softly faded */
(() => {
  const root = document.getElementById('sponsor-logo-carousel');
  if (!root) return;
  const items = [
    { src: 'assets/logo-ieee.svg', alt: 'IEEE Madhya Pradesh Section logo', name: 'IEEE Madhya Pradesh Section' },
    { src: 'assets/logo-mtts.svg', alt: 'IEEE MTT-S logo', name: 'IEEE MTT-S Student Branch Chapter' },
    { src: 'assets/logo-ggv.svg', alt: 'Guru Ghasidas Vishwavidyalaya logo illustration', name: 'Guru Ghasidas Vishwavidyalaya' }
  ];
  const stage = root.querySelector('.sponsor-logo-stage');
  const dots = root.querySelector('.sponsor-carousel-pagination');
  let active = 0, timer = 0;
  const positions = [-1, 0, 1];
  function render() {
    stage.replaceChildren();
    positions.forEach(offset => {
      const idx = (active + offset + items.length) % items.length;
      const item = items[idx];
      const el = document.createElement('div');
      el.className = 'sponsor-logo-item ' + (offset === 0 ? 'is-active' : 'is-side');
      if (offset !== 0) el.setAttribute('aria-hidden', 'true');
      const img = document.createElement('img'); img.src = item.src; img.alt = offset === 0 ? item.alt : '';
      el.appendChild(img);
      if (offset === 0) { const caption = document.createElement('span'); caption.className = 'sponsor-logo-caption'; caption.textContent = item.name; el.appendChild(caption); }
      stage.appendChild(el);
    });
    dots.replaceChildren();
    items.forEach((item, idx) => {
      const dot = document.createElement('button'); dot.type = 'button'; dot.setAttribute('aria-label', 'Show ' + item.name);
      if (idx === active) dot.setAttribute('aria-current', 'true');
      dot.addEventListener('click', () => { active = idx; render(); restart(); }); dots.appendChild(dot);
    });
  }
  function step(direction) { active = (active + direction + items.length) % items.length; render(); }
  function restart() { clearInterval(timer); if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) timer = setInterval(() => step(1), 3600); }
  root.querySelector('.sponsor-prev').addEventListener('click', () => { step(-1); restart(); });
  root.querySelector('.sponsor-next').addEventListener('click', () => { step(1); restart(); });
  root.addEventListener('mouseenter', () => clearInterval(timer)); root.addEventListener('mouseleave', restart);
  document.addEventListener('visibilitychange', () => document.hidden ? clearInterval(timer) : restart());
  render(); restart();
})();
