// 'use strict';

// function onDropdowns() {
//   document.querySelectorAll('.dropdown').forEach(dropdown => {
//     const dropdownButton = dropdown.querySelector('.dropdown__btn');
//     const dropdownList = dropdown.querySelector('.dropdown__list');
//     const dropdownInput = dropdown.querySelector('.dropdown__input');
//     const dropdownListButtons = dropdownList.querySelectorAll('.dropdown__list-button');

//     dropdownButton.onclick = () => {
//       dropdownList.classList.toggle('_active');
//       dropdownButton.classList.toggle('_active');
//     };

//     dropdownListButtons.forEach(dropdownListButton => {
//       dropdownListButton.onclick = event => {
//         event.stopPropagation();

//         dropdownButton.innerText = dropdownListButton.innerText;

//         const optionValse = dropdownListButton.dataset.value;
//         dropdownInput.setAttribute('value', optionValse);

//         removeCalsses(dropdownList, dropdownButton);

//         dropdownListButtons.forEach(dropdownListButton => {
//           setTimeout(() => {
//             dropdownListButton.classList.remove('_active');
//           }, 300);
//         });
//         if (dropdownListButton.innerText === dropdownButton.innerText) {
//           setTimeout(() => {
//             dropdownListButton.classList.add('_active');
//           }, 300);
//         }

//         dropdownButton.focus();
//       };
//     });

//     document.addEventListener('click', event => {
//       if (event.target != dropdownButton) {
//         removeCalsses(dropdownList, dropdownButton);
//       }
//     });

//     document.addEventListener('keydown', event => {
//       if (event.key == 'Escape') {
//         removeCalsses(dropdownList, dropdownButton);
//       }
//     });
//   });

//   function removeCalsses(list, button) {
//     list.classList.remove('_active');
//     button.classList.remove('_active');
//   }
// }

// export default onDropdowns;
