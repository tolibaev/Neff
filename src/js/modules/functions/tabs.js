// 'use strict';

// import {v4 as uuidv4} from 'uuid';

// export function tabs(selectorTabButtons, selectorTabItems, windowWidth = null) {
//   tabsConfig(selectorTabButtons, selectorTabItems);
//   window.addEventListener('resize', () => tabsConfig(selectorTabButtons, selectorTabItems, windowWidth));
// }

// function tabsConfig(selectorTabButtons, selectorTabItems, windowWidth) {
//   const tabButtons = Array.from(document.querySelectorAll(`${selectorTabButtons}`));
//   const tabItems = document.querySelectorAll(`${selectorTabItems}`);

//   if (window.innerWidth < windowWidth || !windowWidth) {
//     tabItems.forEach((tabItem, index) => {
//       const id = uuidv4();
//       tabItem.dataset.id = id;
//       tabButtons[index].id = id;
//     });

//     document.addEventListener('click', event => {
//       const targetElement = event.target;
//       if (!targetElement.closest(selectorTabButtons)) return;

//       // const itemId = targetElement.id;

//       tabItems.forEach(tabItem => {
//         tabItem.classList.remove('_visible');
//       });

//       tabButtons.forEach(tabButton => {
//         tabButton.classList.remove('_active');
//       });

//       tabItems.forEach(tabItem => {
//         if (tabItem.dataset.id == targetElement.id) {
//           tabItem.classList.add('_visible');
//           targetElement.classList.add('_active');
//         }
//       });
//     });
//   } else {
//     tabButtons.forEach((tabButton, index) => {
//       tabButton.dataset.id = '';
//       tabItems[index].id = '';
//     });
//   }
// }
