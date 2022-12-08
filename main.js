
const slides = document.querySelectorAll(".slide");

const pgnBtns = document.querySelectorAll(".pagination-bullets span");

const startAutoSlider = document.querySelector(".start-auto-slider");

const sliderWrapper = document.querySelector(".slider-wrapper");

let activeIndex = 0;
let sliderIntervalId = null;

function pgnBtnsActions() {
	pgnBtns.forEach((btn, index) => {
		btn.addEventListener("click", () => {
			activeIndex = index;

			renderSliders();
			renderPgnBtns();

			updateActiveClasses(pgnBtns);

			updateActiveClasses(slides);
		});
	});
}

function renderSliders() {
	slides.forEach((slide, index) => {

		if (activeIndex === index) {
			slide.classList.add("active");
		} else {
			slide.classList.remove("active");
		}
	});
}

function renderPgnBtns() {
	pgnBtns.forEach((btn, index) => {
		if (activeIndex === index) {
			btn.classList.add("active");
		} else {
			btn.classList.remove("active");
		}
	});
}

function updateActiveClasses(arr) {
	arr.forEach((el, index) => {
		if (activeIndex === index) {
			el.classList.add("active");
		} else {
			el.classList.remove("active");
		}
	});
}

function nextSlide() {

	if (activeIndex === slides.length - 1) {
		activeIndex = 0;
	} else {
		activeIndex++;
	}

	renderSliders();
	renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);
}



function startAutoSlidingFn() {
	sliderIntervalId = setInterval(nextSlide, 1000);
}



function initSlider() {
	renderSliders();
	renderPgnBtns();

	updateActiveClasses(pgnBtns);

	updateActiveClasses(slides);

	pgnBtnsActions();


	startAutoSlidingFn();


}



initSlider();




const section = document.querySelector(".div6");
const spans = document.querySelectorAll(".progress span");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop) {
	spans.forEach((span) => {
	span.style.width = span.dataset.width;
	});
  }
};