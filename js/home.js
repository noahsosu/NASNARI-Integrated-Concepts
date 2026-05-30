// ════════════════════════════════════════════════════════════════
// HOME PAGE ANIMATIONS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  // Animate stat numbers on scroll
  const statCards = document.querySelectorAll('.stat-card');
  
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumber = entry.target.querySelector('.stat-number');
        animateCounter(statNumber);
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.5
  });

  statCards.forEach(card => observer.observe(card));
});

function animateCounter(element) {
  const text = element.textContent;
  const number = parseInt(text);
  const duration = 2000; // 2 seconds
  const increment = number / (duration / 16);
  let current = 0;

  const timer = setInterval(() => {
    current += increment;
    if (current >= number) {
      element.textContent = text;
      clearInterval(timer);
    } else {
      element.textContent = Math.floor(current) + '+';
    }
  }, 16);
}
