// ════════════════════════════════════════════════════════════════
// NASNARI INTEGRATED CONCEPTS LIMITED - COMMON JAVASCRIPT
// Shared across all pages
// ════════════════════════════════════════════════════════════════
document.addEventListener('DOMContentLoaded', function() {
  // ════════════════════════════════════════════════════════════════
  // SCROLL REVEAL ANIMATION
  // ════════════════════════════════════════════════════════════════
  const revealElements = document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });
  revealElements.forEach((el) => observer.observe(el));
  // ════════════════════════════════════════════════════════════════
  // NAVIGATION ACTIVE STATE
  // ════════════════════════════════════════════════════════════════
  const navLinks = document.querySelectorAll('nav a');
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    } else {
      link.classList.remove('active');
    }
  });
  // ════════════════════════════════════════════════════════════════
  // CTA BUTTON NAVIGATION
  // ════════════════════════════════════════════════════════════════
  document.querySelectorAll('.cta-btn').forEach(btn => {
    btn.addEventListener('click', function() {
      window.location.href = 'contact.html';
    });
  });
  // ════════════════════════════════════════════════════════════════
  // SMOOTH SCROLL FOR ANCHOR LINKS
  // ════════════════════════════════════════════════════════════════
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    });
  });
});
// ════════════════════════════════════════════════════════════════
// PAGE LOAD ANIMATION
// ════════════════════════════════════════════════════════════════
window.addEventListener('load', function() {
  document.body.style.opacity = '1';
});
// ════════════════════════════════════════════════════════════════
// CONSOLE MESSAGE
// ════════════════════════════════════════════════════════════════
console.log("%cNASNARI Integrated Concepts Limited", "font-size: 20px; font-weight: bold; color: #1E72BE;");
console.log("%cNASNARI Integrated Concepts Limited | nasnari.com", "font-size: 12px; color: #666;");
console.log("%cLet's build something amazing with NASNARI! 🏗️", "font-size: 12px; color: #1E72BE; font-style: italic;");