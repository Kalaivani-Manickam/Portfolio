// Typing effect for About page
const roles = [
  "Web Developer",
  "AI Enthusiast",
  "Deep Learning Explorer",
  "Problem Solver"
];

let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  current = roles[i];
  document.querySelector(".typing").textContent = current.substring(0, j);

  let speed = isDeleting ? 80 : 150; // slower typing, faster deleting

  if (!isDeleting && j++ === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000);
    return;
  } else if (isDeleting && j-- === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();

// Mobile menu toggle
const toggle = document.getElementById("menu-toggle");
const nav = document.getElementById("navbar");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});
