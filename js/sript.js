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

  let speed = isDeleting ? 80 : 150; // slower typing (150ms), faster deleting (80ms)

  if (!isDeleting && j++ === current.length) {
    isDeleting = true;
    setTimeout(typeEffect, 1000); // pause before deleting
    return;
  } else if (isDeleting && j-- === 0) {
    isDeleting = false;
    i = (i + 1) % roles.length;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
