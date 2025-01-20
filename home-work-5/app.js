const images = [
    'https://fotoblik.ru/wp-content/uploads/2023/09/lekarstva-1.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/tabletki-fon-1.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/rozovye-tabletki-4.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/lekarstva-2.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/lekarstva-5.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/vitaminno-mineralnye-kompleksy-fon-1.webp',
    'https://fotoblik.ru/wp-content/uploads/2023/09/tabletki-fon-3.webp',
];

let currentSlide = 0;


const imgElement = document.getElementById('slide-image');
const slideNumberElement = document.getElementById('slide-number');
const nextSlideButton = document.getElementById('next-slide');


function updateSlide() {
    imgElement.setAttribute('src', images[currentSlide]);
    slideNumberElement.textContent = `Слайд ${currentSlide + 1}`;
}


function nextSlide() {
    currentSlide = (currentSlide + 1) % images.length;
    updateSlide();
}


nextSlideButton.addEventListener('click', nextSlide);
updateSlide();