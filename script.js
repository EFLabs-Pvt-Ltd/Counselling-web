// Smooth slideshow animation for .top-bg with multiple images
const images = [
	'assests/home-bg.webp',
	'assests/bg2.webp',
	'assests/bg3.webp'

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

// Hamburger menu functionality
const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', function() {
    navLinks.classList.toggle('open');
    hamburger.classList.toggle('active');
});

// Optional: close menu when clicking outside
document.addEventListener('click', function(e) {
    if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
        navLinks.classList.remove('open');
        hamburger.classList.remove('active');
    }
});
