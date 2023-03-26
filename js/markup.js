export { textItemsArr, makeTextItem };

const listSliderEl = document.createElement('ul');
listSliderEl.classList.add('list-slider');

const makeItemSliderEl = () => {
  const itemSliderEl = document.createElement('li');
  itemSliderEl.classList.add('item-slider');
  return itemSliderEl;
};

const itemsSliderElArr = [];

for (let i = 0; i < 6; i += 1) {
  itemsSliderElArr.push(makeItemSliderEl());
}

const loadingEl = document.createElement('span');
loadingEl.classList.add('loading');

listSliderEl.append(...itemsSliderElArr);

const contSliderEl = document.querySelector('.js-slider-box');
contSliderEl.append(listSliderEl, loadingEl);

const textItemsArr = [
  { label: 'BMW' },
  { label: 'Porshe' },
  { label: 'McLaren' },
  { label: 'Nissan' },
  { label: 'Toyota' },
  { label: 'Mazda' },
];

const makeTextItem = ite => {
  const textItemSliderEl = document.createElement('p');
  textItemSliderEl.classList.add('target');
  textItemSliderEl.textContent = textItemsArr[ite].label;
  return textItemSliderEl;
};
