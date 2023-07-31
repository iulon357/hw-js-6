// დავალება 1:

function displayTime () {
    const dateTime = new Date();
    const hrs = dateTime.getHours();
    const min = dateTime.getMinutes();
    const sec = dateTime.getSeconds();
    
    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}

setInterval(displayTime, 10);

//-------------------------------------------------------------------

// დავალება 2:

function initSlider() {
	const slides = document.querySelectorAll(".slide");
	const next = document.querySelector(".next");
	const prev = document.querySelector(".prev");

	let activeIndex = 0;

	function renderSlides() {
		slides.forEach((slide, index) => {
			if (activeIndex === index) {
				slide.classList.add("active");
			} else {
				slide.classList.remove("active");
			}
		});
	}

	renderSlides();

	function showNext() {
		if (activeIndex === slides.length - 1) {
			activeIndex = 0;
		} else {
			activeIndex++;
		}
		renderSlides();
	}

	function showPrev() {
		if (activeIndex === 0) {
			activeIndex = slides.length - 1;
		} else {
			activeIndex--;
		}

		renderSlides();
	}

	next.addEventListener("click", showNext);
	prev.addEventListener("click", showPrev);

	let sliderIntervalId = null;

	function startAutoSliderFn() {
		sliderIntervalId = setInterval(showNext, 4000);
	}

	document.addEventListener("keyup", (e) => {
		// console.log(e);
		if (e.code === "ArrowRight") {
			showNext();
		}
		if (e.code === "ArrowLeft") {
			showPrev();
		}
	});
}