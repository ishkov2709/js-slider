import { textItemsArr, makeTextItem, makeAudio } from './markup.js';

const imgSlider = document.querySelectorAll('.item-slider');
const loading = document.querySelector('.loading');

imgSlider.forEach((el, i) => {
  if (!imgSlider[i].classList.contains('active')) {
    imgSlider[0].classList.add('active');
    if (
      imgSlider[0].classList.contains('active') &&
      imgSlider[0].firstElementChild === null
    ) {
      imgSlider[0].append(makeTextItem(0), makeAudio(0));
    }
  }
  imgSlider[i].addEventListener('click', function () {
    if (
      !imgSlider[i].classList.contains('active') &&
      !loading.classList.contains('active')
    ) {
      imgSlider.forEach((elem, j) => {
        imgSlider[j].classList.remove('active');
        if (imgSlider[j].firstElementChild !== null) {
          imgSlider[j].firstElementChild.remove();
          imgSlider[j].lastElementChild.remove();
        }
      });

      imgSlider[i].classList.add('active');
      imgSlider[i].append(makeTextItem(i), makeAudio(i));
      loading.classList.add('active');

      setTimeout(function () {
        loading.classList.remove('active');
      }, 700);
    }
  });
});
