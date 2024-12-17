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

// Featured Section
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

//Specials Section
document.addEventListener('DOMContentLoaded', function () {
  const specialsSection = document.querySelector('.specials-section');

  if (!specialsSection) {
    console.error("Specials Section not found.");
    return;
  }

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        specialsSection.classList.add('animate-specials');
        observer.unobserve(entry.target); // Stop observing after animation runs
      }
    });
  }, {
    root: null, // Use the viewport as the root
    rootMargin: "0px",
    threshold: 0.3, // Trigger when 30% of the section is visible
  });

  observer.observe(specialsSection);
});


document.addEventListener('DOMContentLoaded', function () {
  const countdownElement = document.getElementById('countdown');
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 3); // 3-day countdown

  function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      countdownElement.textContent = "Offer Expired";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    countdownElement.textContent = `${days}d ${hours}h ${minutes}m ${seconds}s`;
  }

  setInterval(updateCountdown, 1000);
  updateCountdown();
});


// Story Section - Scroll Effect Function
document.addEventListener("DOMContentLoaded", function () {
  const storySection = document.querySelector(".story-section");

  const observer = new IntersectionObserver(
      (entries) => {
          entries.forEach((entry) => {
              if (entry.isIntersecting) {
                  storySection.classList.add("visible");
              }
          });
      },
      {
          threshold: 0.5, // Trigger when 50% of the section is visible
      }
  );

  observer.observe(storySection);
});

// Testimonials - Scroll Effect
document.addEventListener("DOMContentLoaded", () => {
  const testimonialCards = document.querySelectorAll(".testimonial-card");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
          entry.target.style.animationDelay = `${index * 0.2}s`; // Staggered delay
          entry.target.classList.add("fade-in");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.3 }
  );

  testimonialCards.forEach((card) => observer.observe(card));
});

// CTA/NewsLetter - Scroll Effect
document.addEventListener("DOMContentLoaded", function () {
  const scrollElements = document.querySelectorAll('.scroll-fade-in');

  const scrollHandler = () => {
      scrollElements.forEach((element) => {
          const position = element.getBoundingClientRect().top;
          const screenHeight = window.innerHeight;

          if (position < screenHeight * 0.85) {
              element.classList.add('show');
          }
      });
  };

  // Run on scroll and page load
  window.addEventListener('scroll', scrollHandler);
  scrollHandler();
});
