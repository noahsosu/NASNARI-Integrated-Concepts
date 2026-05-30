// ════════════════════════════════════════════════════════════════
// PROJECTS PAGE ANIMATIONS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  const projectCards = document.querySelectorAll('.project-card');

  // Animate on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1
  });

  projectCards.forEach(card => observer.observe(card));
});
