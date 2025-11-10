const openBook = document.getElementById("openBook");
const cover = document.querySelector(".cover");
const pages = document.querySelector(".pages");
const pageElements = document.querySelectorAll(".page");
let currentPage = 0;

openBook.addEventListener("click", () => {
  cover.style.transform = "translateX(-100%)";
  pages.style.display = "flex";
  showPage(0);
  playMusic();
  startHearts();
});

function showPage(index) {
  pageElements.forEach((p, i) => {
    p.classList.remove("active");
    if (i === index) p.classList.add("active");
  });

  if (index < pageElements.length - 1) {
    setTimeout(() => showPage(index + 1), 4000); // otomatis ganti tiap 4 detik
  }
}

function playMusic() {
  const music = document.getElementById("music");
  music.play().catch(() => {
    // kalau autoplay diblokir browser, tetap aman
    console.log("Klik layar untuk mulai musik 🎶");
  });
}

// efek hati jatuh
function startHearts() {
  setInterval(() => {
    const heart = document.createElement("div");
    heart.classList.add("heart");
    heart.innerHTML = "💖";
    heart.style.left = Math.random() * 100 + "vw";
    heart.style.animationDuration = Math.random() * 3 + 2 + "s";
    document.body.appendChild(heart);
    setTimeout(() => heart.remove(), 5000);
  }, 500);
}
