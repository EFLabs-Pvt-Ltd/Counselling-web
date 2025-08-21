// Smooth slideshow animation for .top-bg with multiple images
const images = [
	'assests/home-bg.jpeg',
	'assests/bg2.jpg',
	'assests/bg3.jpg'
	// Add more image paths as needed
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
	setInterval(showNextTopBg, 2000); // change every 5 seconds
}
