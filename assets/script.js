const slides = [
	{
		"image":"./assets/images/slideshow/slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"./assets/images/slideshow/slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"./assets/images/slideshow/slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"./assets/images/slideshow/slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

let index = 0;

const changingDots = document.querySelectorAll(".dot");

const changingSlides = document.querySelector(".banner-img");

const arrowLeft = document.querySelector(".arrow_left").addEventListener("click",  () => {
	index = (index -1 + slides.length) % slides.length;
	updateSlider();
	console.log("Vous avez cliqué sur la flèche gauche")
 });

const arrowRight = document.querySelector(".arrow_right").addEventListener("click", () => {
	index = (index + 1) % slides.length;
	updateSlider();
	console.log("Vous avez cliqué sur la flèche droite")
 });

 function updateSlider() {
	const currentSlide = slides[index];
	changingSlides.src = currentSlide.image;
	changingSlides.alt = currentSlide.tagLine;
 }

 //  mettre à jour les points//



