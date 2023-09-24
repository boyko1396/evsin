import Swiper, { } from 'swiper';

class SliderInit {
  constructor(selector, options) {
    this.selector = selector;
    this.options = options;
    Swiper.use();
    this.init();
  }

  init() {
    const sliderElement = document.querySelector(this.selector);
    if (sliderElement) {
      this.swiper = new Swiper(sliderElement, this.options);
    }
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const infoSlider = new SliderInit('.js-info-slider-init', {
    slidesPerView: 1,
    spaceBetween: 0,
    loop: true,
  });
});

export default SliderInit;