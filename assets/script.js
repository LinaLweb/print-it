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

const pointsDots = document.querySelectorAll(".dot");

const imagesSlides = document.querySelector(".banner-img");

const arrowLeft = document.querySelector(".arrow_left").addEventListener("click",  () => {
	index = (index -1 + slides.length) % slides.length;                                      //calcul pour que les images reculent quand on clique sur la flèche gauche//
	updateSlider();
	console.log("Vous avez cliqué sur la flèche gauche")
 });

const arrowRight = document.querySelector(".arrow_right").addEventListener("click", () => {   
	index = (index + 1) % slides.length;                                                     //calcul pour que les images avancent quand on clique sur la flèche droite//
	updateSlider();
	console.log("Vous avez cliqué sur la flèche droite")
 });

 function updateSlider() {                //fonction pour la mise à jour des images dans le carousel//
	const currentSlide = slides[index];
	imagesSlides.src = currentSlide.image;
	imagesSlides.alt = currentSlide.tagLine;

	pointsDots.forEach(dot => {              // boucle pour la mise à jour des bullets points sur les images dans le carousel//
		dot.classList.add("dot_selected");  // ajoute la classe pour le bullet point actuel//
	});
	pointsDots[index].classList.remove("dot_selected"); //supprime la classe pour les autres bullets points//
 }


 //reste à faire pour le tagline les phrases qui se mettent à jour en même temps que les images dans le carousel//



