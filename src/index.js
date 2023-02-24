import './style.css';

/* ******* popup menu-nav mobile ******* */
// popup menu
const hamburgerBtn = document.querySelector('.icon-menu-mobile img');
const crossBtn = document.querySelector('.cross img');
const mobileMenu = document.querySelector('.nav-mobile');
const mobileMenuElements = document.querySelectorAll('.nav-mobile .container li');
hamburgerBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
  hamburgerBtn.style.display = 'none';
});
crossBtn.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
  hamburgerBtn.style.display = 'block';
});

mobileMenuElements.forEach((menuElement) => {
  menuElement.addEventListener('click', () => {
    mobileMenu.style.display = 'none';
    hamburgerBtn.style.display = 'block';
  });
});

/* ******* information carousel ******* */
// Select the necessary elements
const carousel = document.querySelector('.carousel');
const carouselItems = document.querySelector('.carousel-items');
const carouselItem = document.querySelectorAll('.carousel-item');
const carouselArrowLeft = document.querySelector('.carousel-arrow-left');
const carouselArrowRight = document.querySelector('.carousel-arrow-right');
const carouselDots = document.querySelector('.carousel-dots');

// Calculate the width of the carousel item
let carouselWidth;
if (window.innerWidth <= 768) {
  carouselWidth = carousel.clientWidth - 5;
} else {
  carouselWidth = carousel.clientWidth / 5;
}

const carouselPadding = carousel.clientWidth - carouselWidth * carouselItem.length;
let currentSlide = 0;
let numWraps = 0;

// Add padding to the end of the carousel container
carousel.style.paddingLeft = `${carouselPadding / 2}px`;
carousel.style.paddingRight = `${carouselPadding / 2}px`;

// Function to update the dots
function updateDots() {
  const dots = carouselDots.children;
  for (let i = 0; i < dots.length; i += 1) {
    dots[i].classList.remove('active');
  }
  dots[currentSlide].classList.add('active');
}

// Function to move the carousel to a specific slide
function moveCarouselToSlide(slideIndex) {
  const distance = slideIndex * -carouselWidth;
  carouselItems.style.transform = `translateX(${distance + numWraps * carousel.clientWidth}px)`;
  currentSlide = slideIndex % carouselItem.length;
  if (currentSlide === 0 && slideIndex !== 0) {
    numWraps += 1;
  } else if (currentSlide === carouselItem.length - 1 && slideIndex !== carouselItem.length - 1) {
    numWraps -= 1;
  }
  updateDots();
}

// Add the dots
for (let i = 0; i < carouselItem.length; i += 1) {
  const dot = document.createElement('span');
  dot.classList.add('carousel-dot');
  if (i === 0) {
    dot.classList.add('active');
  }
  dot.addEventListener('click', () => {
    moveCarouselToSlide(i);
  });
  carouselDots.appendChild(dot);
}

// Event listener for arrow left click
carouselArrowLeft.addEventListener('click', () => {
  let newSlide = currentSlide - 1;
  if (newSlide < 0) {
    newSlide = carouselItem.length - 1;
  }
  moveCarouselToSlide(newSlide);
});

// Event listener for arrow right click
carouselArrowRight.addEventListener('click', () => {
  let newSlide = currentSlide + 1;
  if (newSlide >= carouselItem.length) {
    newSlide = 0;
  }
  moveCarouselToSlide(newSlide);
});

// Update carouselWidth on window resize
window.addEventListener('resize', () => {
  if (window.innerWidth <= 768) {
    carouselWidth = carousel.clientWidth;
  } else {
    carouselWidth = carousel.clientWidth / 3;
  }
  moveCarouselToSlide(currentSlide);
});
