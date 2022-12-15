
// Настройка Choices.js

const elements = document.querySelectorAll('.select');
elements.forEach(el => {
new Choices(el, {
  searchEnabled: false,
  position: 'bottom'
  });
});

// Настройка noUiSlider.js

const rangeSlider = document.getElementById('range-slider');
if (rangeSlider) {
    noUiSlider.create(rangeSlider, {
        start: [75],
        connect: 'lower',
        step: 1,
        range: {
            'min': [0],
            'max': [100]
        }
    });

    const inputConst = document.getElementById('input-id');
    rangeSlider.noUiSlider.on('update', function(values){
        inputConst.value = Math.round(values)
    })
}

// Мобильное меню 

const btn = document.querySelectorAll('.menu__btn');
const modalOverlay = document.querySelector('.modal-overlay ');
const modals = document.querySelectorAll('.modal');
const closeIcon = document.querySelector('.close__icon');

btn.forEach((el) => {
	el.addEventListener('click', (e) => {
		let path = e.currentTarget.getAttribute('data-path');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
		document.querySelector(`[data-target="${path}"]`).classList.add('modal--visible');
		modalOverlay.classList.add('modal-overlay--visible');
	});
});

modalOverlay.addEventListener('click', (e) => {
	if (e.target === modalOverlay) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});

closeIcon.addEventListener('click', (e) => {
	if (e.target === closeIcon) {
		modalOverlay.classList.remove('modal-overlay--visible');
		modals.forEach((el) => {
			el.classList.remove('modal--visible');
		});
	}
});