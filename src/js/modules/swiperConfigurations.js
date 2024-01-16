'use strict';

import Swiper from 'swiper';

import {Autoplay, Navigation, Pagination} from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

function swiperConfigurations(selector) {
  if (selector) {
    new Swiper(`${selector}`, {
      modules: [Autoplay, Navigation, Pagination],

      navigation: {
        nextEl: '.hero-slider__arrow--right',
        prevEl: '.hero-slider__arrow--left',
      },
      pagination: {
        el: '.hero-slider__paginations',
        clickable: true,
      },
      autoplay: {
        delay: 1500,
        disableOnInteraction: false,
      },
      loop: true,
      speed: 1000,
      slidesPerView: 1,
      spaceBetween: 10,
      autoHeight: true,
    });
  }
}

export default swiperConfigurations;
