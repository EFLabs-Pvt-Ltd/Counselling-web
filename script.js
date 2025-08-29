// Smooth slideshow animation for .top-bg with multiple images
const images = [
	'assests/1.webp',
	'assests/2.webp',
	'assests/3.webp'

];

let current = 0;
const topBg = document.querySelector('.top-bg');

function showNextTopBg() {
	topBg.style.opacity = 0;
	setTimeout(() => {
		topBg.style.backgroundImage = `url('${images[current]}')`;
		topBg.style.opacity = 1;
		current = (current + 1) % images.length;
	}, 100); // fade duration
}

if (topBg) {
	topBg.style.backgroundImage = `url('${images[0]}')`;
	topBg.style.transition = 'opacity 1s, background-image 1s';
	topBg.style.opacity = 1;
	setInterval(showNextTopBg, 2000); // change every 2 seconds
}

document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    let navOverlay;

    // Create overlay element
    function createOverlay() {
        navOverlay = document.createElement('div');
        navOverlay.className = 'nav-overlay';
        document.body.appendChild(navOverlay);
    }
    createOverlay();

    // Toggle menu function
    function toggleMenu() {
        hamburger.classList.toggle('active');
        navLinks.classList.toggle('active');
        navOverlay.classList.toggle('active');
        
        // Prevent body scroll when menu is open
        document.body.style.overflow = hamburger.classList.contains('active') ? 'hidden' : '';
    }

    // Event listeners
    hamburger.addEventListener('click', toggleMenu);
    navOverlay.addEventListener('click', toggleMenu);

    // Close menu when clicking a link
    navLinks.querySelectorAll('a, button').forEach(item => {
        item.addEventListener('click', () => {
            if (hamburger.classList.contains('active')) {
                toggleMenu();
            }
        });
    });

    // Close menu on window resize if open
    window.addEventListener('resize', () => {
        if (window.innerWidth > 900 && hamburger.classList.contains('active')) {
            toggleMenu();
        }
    });
});
const testimonials = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.testimonial-nav .prev');
const nextBtn = document.querySelector('.testimonial-nav .next');
let index = 0;

function showTestimonial(n) {
  testimonials.forEach((card, i) => {
    card.classList.remove('active');
    if (i === n) {
      card.classList.add('active');
    }
  });
}

prevBtn.addEventListener('click', () => {
  index = (index - 1 + testimonials.length) % testimonials.length;
  showTestimonial(index);
});

nextBtn.addEventListener('click', () => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
});


setInterval(() => {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}, 6000);
