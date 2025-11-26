const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Sélection des éléments
const arrowLeft = document.querySelector(".arrow_left");
const arrowRight = document.querySelector(".arrow_right");
const bannerImg = document.querySelector(".banner-img");
const bannerText = document.querySelector("#banner p");
const dotsContainer = document.querySelector(".dots");

// Étape 3 : créer les bullets points
slides.forEach((slide, index) => {
    const dot = document.createElement("div");
    dot.classList.add("dot");
    if(index === 0) dot.classList.add("dot_selected"); // première slide active
    dotsContainer.appendChild(dot);
});
const dots = document.querySelectorAll(".dot");

// Variable pour savoir quelle slide est affichée
let currentSlide = 0;

// Fonction pour mettre à jour le carrousel
function updateCarousel() {
    bannerImg.src = `./assets/images/slideshow/${slides[currentSlide].image}`;
    bannerText.innerHTML = slides[currentSlide].tagLine;
    dots.forEach((dot, index) => {
        dot.classList.toggle("dot_selected", index === currentSlide);
    });
}

// Étape 4 + 5 : navigation flèches avec boucle infinie
arrowRight.addEventListener("click", () => {
    currentSlide++;
    if(currentSlide >= slides.length) currentSlide = 0; // boucle vers la première slide
    updateCarousel();
});

arrowLeft.addEventListener("click", () => {
    currentSlide--;
    if(currentSlide < 0) currentSlide = slides.length - 1; // boucle vers la dernière slide
    updateCarousel();
});