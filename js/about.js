// ════════════════════════════════════════════════════════════════
// ABOUT PAGE ANIMATIONS
// ════════════════════════════════════════════════════════════════

document.addEventListener('DOMContentLoaded', function() {
  const certCards = document.querySelectorAll('.cert-card');
  const teamMembers = document.querySelectorAll('.team-member');

  // Animate cert cards with staggered delay
  certCards.forEach((card, index) => {
    card.style.animation = `slideInCard 0.6s cubic-bezier(0.16, 1, 0.3, 1) ${index * 0.1}s both`;
  });

  // Add scale animation on hover for team members
  teamMembers.forEach(member => {
    member.addEventListener('mouseenter', function() {
      this.querySelector('.member-avatar').style.perspective = '1000px';
    });
  });
});

// Add slide in card animation
const style = document.createElement('style');
style.textContent = `
  @keyframes slideInCard {
    from {
      opacity: 0;
      transform: translateY(30px) scale(0.98);
    }
    to {
      opacity: 1;
      transform: translateY(0) scale(1);
    }
  }
`;
document.head.appendChild(style);
