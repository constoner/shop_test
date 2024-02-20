import initSlider from './module/initSlider.js';
import { initAccordions } from './vendor/accordion/init-accordion.js';
import { initBadges } from './module/initBadges.js';

window.addEventListener('DOMContentLoaded', () => {
  initSlider();
  initAccordions();
  initBadges();
});
