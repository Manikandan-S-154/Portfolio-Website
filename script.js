// Smooth scroll
document.querySelectorAll('nav a').forEach(link => {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({ behavior: 'smooth' });
  });
});

// Show More Projects button
const toggleBtn = document.getElementById("toggle-btn");
const hiddenCards = document.querySelectorAll(".hidden-card");
let expanded = false;

toggleBtn.addEventListener("click", () => {
  expanded = !expanded;
  hiddenCards.forEach(card => {
    card.style.display = expanded ? "block" : "none";
  });
  toggleBtn.textContent = expanded ? "Show Less Projects" : "Show More Projects";
});
