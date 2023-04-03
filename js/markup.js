export { makeTextItem };

const listSliderEl = document.createElement('ul');
listSliderEl.classList.add('list-slider');

const textItemsArr = ['BMW', 'Porshe', 'McLaren', 'Nissan', 'Toyota', 'Mazda'];

const itemsSliderElArr = [];

textItemsArr.forEach((el, i) => {
  const listItemSlide = makeItemSliderEl();
  listItemSlide.append(makeTextItem(i));
  itemsSliderElArr.push(listItemSlide);
});

listSliderEl.append(...itemsSliderElArr);

const loadingEl = document.createElement('span');
loadingEl.classList.add('loading');

const contSliderEl = document.querySelector('.js-slider-box');
contSliderEl.append(listSliderEl, loadingEl);

function makeItemSliderEl() {
  const itemSliderEl = document.createElement('li');
  itemSliderEl.classList.add('item-slider');
  itemSliderEl.onselectstart = function () {
    return false;
  };
  return itemSliderEl;
}
function makeTextItem(i) {
  const textItemSliderEl = document.createElement('p');
  textItemSliderEl.classList.add('active-text');
  textItemSliderEl.textContent = textItemsArr[i];
  return textItemSliderEl;
}
