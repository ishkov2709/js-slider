export { textItemsArr, makeTextItem, makeAudio };

const listSliderEl = document.createElement('ul');
listSliderEl.classList.add('list-slider');

const makeItemSliderEl = () => {
  const itemSliderEl = document.createElement('li');
  itemSliderEl.classList.add('item-slider');
  itemSliderEl.onselectstart = function () {
    return false;
  };
  return itemSliderEl;
};

const itemsSliderElArr = [];

for (let i = 0; i < 6; i += 1) {
  itemsSliderElArr.push(makeItemSliderEl());
}

listSliderEl.append(...itemsSliderElArr);

const loadingEl = document.createElement('span');
loadingEl.classList.add('loading');

const themeSite = document.createElement('audio');
themeSite.classList.add('theme');
themeSite.src = './audio/theme.mp3';
themeSite.autoplay = true;
themeSite.preload = 'auto';
themeSite.volume = 0.1;
themeSite.loop = true;

const contSliderEl = document.querySelector('.js-slider-box');
contSliderEl.append(listSliderEl, loadingEl, themeSite);

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

const makeAudio = num => {
  const itemAudioEl = document.createElement('audio');
  itemAudioEl.src = `./audio/track_${num}.mp3`;
  itemAudioEl.autoplay = true;
  itemAudioEl.preload = 'auto';
  itemAudioEl.volume = 0.15;
  return itemAudioEl;
};
