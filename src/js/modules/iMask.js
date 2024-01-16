'use strict';

import IMask from 'imask';

function validatePhoneNumber() {
  const validateInput = document.getElementById('inputTel');
  const phoneMask = IMask(validateInput, {
    mask: '+7 (000) 000-00-00',
  });
}

export default validatePhoneNumber;
