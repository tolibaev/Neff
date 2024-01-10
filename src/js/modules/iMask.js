// import IMask from 'imask';

// function validatePhoneNumber() {
//   const telValidates = document.querySelectorAll('.tel-validate');

//   telValidates.forEach(telValidate => {
//     const validateButton = telValidate.querySelector('.tel-validate__button');
//     const validateList = telValidate.querySelector('.tel-validate__list');
//     const validateItems = telValidate.getElementsByClassName('tel-validate__list-item');
//     const validateItemsArray = [...validateItems];
//     const validateInput = telValidate.querySelector('.tel-validate__input');

//     let phoneMask = IMask(validateInput, {
//       mask: '+7 (000) 000-00-00',
//     });

//     validateButton.onclick = () => {
//       validateButton.classList.toggle('_active');
//       validateList.classList.toggle('_active');

//       validateInput.value = '';
//       phoneMask.updateValue('');
//     };

//     validateItemsArray.forEach(validateItem => {
//       validateItem.onclick = () => {
//         const imgInButton = validateButton.querySelector('[data-id]');
//         if (validateItem.querySelector('img')) {
//           const innerImg = validateItem.querySelector('img');
//           validateButton.prepend(innerImg);
//           validateItem.append(imgInButton);
//         }

//         validateButton.classList.remove('_active');
//         validateList.classList.remove('_active');

//         const imgInButtonDataAttribute = validateButton.querySelector('[data-id]').dataset.id;

//         if (imgInButtonDataAttribute == 'flag-uz') {
//           phoneMask.mask = '+998 (00) 000-00-00';
//           validateInput.placeholder = '+998 (00) 000-00-00';
//         }
//         if (imgInButtonDataAttribute == 'flag-kz') {
//           phoneMask.mask = '+7 (000) 000-00-00';
//           validateInput.placeholder = '+7 (000) 000-00-00';
//         }
//         if (imgInButtonDataAttribute == 'flag-fr') {
//           phoneMask.mask = '+33 00-00-00-00';
//           validateInput.placeholder = '+33 00-00-00-00';
//         }
//         if (imgInButtonDataAttribute == 'flag-es') {
//           phoneMask.mask = '+34 (000) 000-000';
//           validateInput.placeholder = '+34 (000) 000-000';
//         }
//         if (imgInButtonDataAttribute == 'flag-ru') {
//           phoneMask.mask = '+7 (000) 000-00-00';
//           validateInput.placeholder = '+7 (000) 000-00-00';
//         }
//       };
//     });
//   });
// }

// export default validatePhoneNumber;
