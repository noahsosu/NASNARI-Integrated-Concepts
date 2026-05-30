// ════════════════════════════════════════════════════════════════
// CONTACT PAGE ANIMATIONS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.querySelector('.contact-form');
  const formInputs = document.querySelectorAll('.form-group input, .form-group textarea, .form-group select');

  // Add focus animations
  formInputs.forEach(input => {
    input.addEventListener('focus', function() {
      this.parentElement.classList.add('focused');
    });

    input.addEventListener('blur', function() {
      this.parentElement.classList.remove('focused');
    });
  });

  // Form submission
  contactForm.addEventListener('submit', function(e) {
    // Allow Formspree to handle submission
    // You can add additional client-side validation here if needed
  });
});
