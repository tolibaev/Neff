'use strict';

export function clickHandlers() {
  const fileInput = document.getElementById('file'),
    fileButton = document.querySelector('.file__button');

  fileButton.onclick = () => fileInput.click();
  //--------------------------------------------------//

  const popupSpollerButton = document.querySelector('.form-application__spoller-button'),
    application = document.querySelector('.application');

  popupSpollerButton.addEventListener('click', () => {
    //  application.classList.toggle('_lock');
  });
}
