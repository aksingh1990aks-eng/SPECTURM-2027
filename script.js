/* =========================
   TECHNICAL TRACKS (SPECTRAM 2027)
========================= */
const tracks = [
  "Microwave Engineering and RF Systems",
  "Antenna Design and Smart Antennas",
  "Electromagnetic Theory and Computational Electromagnetics",
  "Wave Propagation and Channel Modeling",
  "Millimeter-Wave and Terahertz Technologies",
  "Microwave Circuits and Devices",
  "5G/6G Wireless Communication Systems",
  "Satellite and Space Communications",
  "Radar Systems and Remote Sensing",
  "Internet of Things (IoT) and Wireless Sensor Networks",
  "AI and Machine Learning Applications in RF and Microwave",
  "Signal Processing Techniques"
];

const tracksGrid = document.getElementById("tracksGrid");

tracks.forEach((track, index) => {
  const svgIcon = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>`;
  
  tracksGrid.innerHTML += `
    <div class="track">
      <span class="track-num">
        ${String(index + 1).padStart(2, "0")}
      </span>
      <h3>${track}</h3>
      <div class="track-icon">${svgIcon}</div>
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