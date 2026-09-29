/* =========================
   TECHNICAL TRACKS (SPECTRAM 2027)
========================= */
const tracks = [
  {
    id: "01",
    title: "SIGNAL PROCESSING",
    subtitle: "Transforming Signals into Intelligence",
    description: "Enabling Seamless Intelligence through 5G/6G, Integrated Networks, and Ubiquitous Wireless Connectivity",
    color: "#08656a", 
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
    color: "#0b5894", 
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
    color: "#b91c3a", 
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

/* =========================
   MOBILE MENU
========================= */
const menuButton = document.querySelector(".menu-btn");
const nav = document.getElementById("nav");

menuButton.addEventListener("click", () => {
  nav.classList.toggle("open");
});

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

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    topButton.style.display = "grid";
    topButton.classList.add("show");
  } else {
    topButton.style.display = "none";
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});

/* =========================
   FOOTER YEAR
========================= */
document.getElementById("year").textContent = new Date().getFullYear();
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