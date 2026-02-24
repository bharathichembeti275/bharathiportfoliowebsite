// Mobile Menu
function toggleMenu() {
  document.querySelector(".nav-links").classList.toggle("active");
}

// Contact Form
document.getElementById("contact-form").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("form-message").textContent =
    "✅ Thank you! Your message has been sent.";
  this.reset();
});

// Typing Animation
const textArray = ["Web Developer", "Python Developer", "Frontend Developer"];
let index = 0;
let charIndex = 0;
let currentText = "";
let isDeleting = false;

function typeEffect() {
  const typingElement = document.getElementById("typing");
  if (!typingElement) return;

  if (!isDeleting && charIndex <= textArray[index].length) {
    currentText = textArray[index].substring(0, charIndex++);
  } else if (isDeleting && charIndex >= 0) {
    currentText = textArray[index].substring(0, charIndex--);
  }

  typingElement.textContent = currentText;

  if (charIndex === textArray[index].length) isDeleting = true;
  if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    index = (index + 1) % textArray.length;
  }

  setTimeout(typeEffect, isDeleting ? 50 : 100);
}

typeEffect();