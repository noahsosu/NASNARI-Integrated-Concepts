// ════════════════════════════════════════════════════════════════
// SERVICES PAGE ANIMATIONS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  const serviceCards = document.querySelectorAll('.service-card');

  // Add hover ripple effect
  serviceCards.forEach(card => {
    card.addEventListener('mouseenter', function() {
      this.style.animation = 'none';
      setTimeout(() => {
        this.style.animation = '';
      }, 10);
    });
  });

  // Animate cards on scroll
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
      }
    });
  }, {
    threshold: 0.1
  });

  serviceCards.forEach(card => observer.observe(card));
});
