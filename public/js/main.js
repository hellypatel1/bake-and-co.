document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    hamburger.addEventListener('click', () => {
      mobileMenu.classList.toggle('open');
      hamburger.classList.toggle('open'); // Toggle the X icon
    });
  
    document.addEventListener('click', (event) => {
      if (!mobileMenu.contains(event.target) && !hamburger.contains(event.target)) {
        mobileMenu.classList.remove('open');
        hamburger.classList.remove('open'); // Reset the X icon
      }
    });
});

document.addEventListener('scroll', () => {
  const cards = document.querySelectorAll('.product-card');
  const triggerPoint = window.innerHeight * 0.8;

  cards.forEach((card) => {
    const cardTop = card.getBoundingClientRect().top;
    if (cardTop < triggerPoint) {
      card.classList.add('visible');
    }
  });
});