import noUiSlider from '../vendor/nouislider/nouislider.js';
const initSlider = () => {
  const sliderContainers = document.querySelectorAll('.slider');

  sliderContainers.forEach((item) => {
    const slider = item.querySelector('.slider__el');

    const isDouble = slider.dataset.isDouble === '' ? true : false;
    const tooltipSymbol = slider.dataset.symbol;

    const inputContainer = item.querySelector('.slider__values');
    const inputs = inputContainer.querySelectorAll('input');

    const inputMin = isDouble ? inputs[0] : null;
    const inputMax = inputs[inputs.length - 1];
    const MAX = parseInt(inputMax.max, 10);
    const MIN = isDouble ? parseInt(inputMin.min, 10) : null;

    const onSliderChange = () => {
      const values = slider.noUiSlider.get(true);
      if (isDouble) {
        inputMin.value = Math.round(values[0]);
        inputMax.value = Math.round(values[values.length - 1]);
      } else {
        inputMax.value = Math.round(values);
      }
    };

    const onInputChange = () => {
      const inputValue = isDouble ? [inputMin.value, inputMax.value] : inputMax.value;

      slider.noUiSlider.set(inputValue);
    };

    const startSettings = isDouble ? [inputMin.value, inputMax.value] : inputMax.value;
    const connectSettings = isDouble ? true : [true, false];
    const rangeSettings = {
      'min': isDouble ? MIN : 0,
      'max': MAX,
    };

    if (isDouble) {
      rangeSettings['75%'] = [250];
    }


    noUiSlider.create(slider, {
      start: startSettings,
      connect: connectSettings,
      step: 1,
      range: rangeSettings,
      tooltips: {
        to: (numericValue) => {
          return `${numericValue.toFixed(0)} ${tooltipSymbol}`;
        },
      },
    });

    slider.noUiSlider.on('slide', () => onSliderChange());
    inputContainer.addEventListener('input', () => onInputChange());

  });
};

export default initSlider;
