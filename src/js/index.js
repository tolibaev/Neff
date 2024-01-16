'use strict';

import useDynamicAdapt from './modules/dynamicAdapt.js';
import {formValidate} from './modules/formValidate.js';
import {clickHandlers} from './modules/functions/clickHandlers.js';
import {customSlider} from './modules/functions/customSlider.js';
import onDropdowns from './modules/functions/dropdown.js';
import {menuBurger} from './modules/functions/menuBurger.js';
import {tabs} from './modules/functions/tabs.js';
import validatePhoneNumber from './modules/iMask.js';
import {popup} from './modules/popups.js';
import {setTypeForButtons} from './modules/secondaryFunctions.js';
import {spollersInit} from './modules/spollers.js';
import swiperConfigurations from './modules/swiperConfigurations.js';

useDynamicAdapt();

setTypeForButtons();

clickHandlers();

spollersInit();

popup();

onDropdowns();

validatePhoneNumber();

formValidate('.form-application');

menuBurger();

swiperConfigurations('.hero-slider .swiper');

// tabs('.hands-row__button', '.item-together', 479.98);

// customSlider(
//   {
//     prev: '.with-children__arrow--prev',
//     next: '.with-children__arrow--next',
//   },
//   '.with-children .buttons-list'
// );
