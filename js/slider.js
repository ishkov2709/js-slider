import { makeTextItem } from './markup.js';

const sliderListEl = document.querySelector('.list-slider');
const loading = document.querySelector('.loading');
const firstElementActiveSlide =
  sliderListEl.firstElementChild.classList.add('active');

makeTextItem(sliderListEl.firstElementChild);

sliderListEl.addEventListener('click', e => {
  const currentSlide = document.querySelector('.item-slider.active');
  if (currentSlide.textContent === e.target.textContent) {
    return;
  }

  onSlideRemoveClassActive(currentSlide);
  onSlideAddClassActive(e);

  onLoadingAddClassActive();
  setTimeout(onLoadingRemoveClassActive, 700);
});

function onSlideAddClassActive(e) {
  e.target.classList.add('active');
}

function onSlideRemoveClassActive(current) {
  current.classList.remove('active');
}

function onLoadingAddClassActive() {
  loading.classList.add('active');
}

function onLoadingRemoveClassActive() {
  loading.classList.remove('active');
}
