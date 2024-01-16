'use strict';

export function formValidate(formSelector) {
  const popupForm = document.querySelector(formSelector);
  popupForm.onsubmit = formSend;

  function formSend(event) {
    event.preventDefault();

    let error = formValidate(popupForm);

    if (error === 0) {
      console.log('good');
    } else {
      alert('Заполните обизательные поля');
    }
  }

  function formValidate(form) {
    let error = 0;

    const formReq = document.querySelectorAll('._req');

    formReq.forEach(input => {
      formRemoveError(input);

      if (input.classList.contains('_email')) {
        if (emailTest(input)) {
          formAddError(input);
          error++;
        }
      } else if (input.getAttribute('type') === 'checkbox' && input.checked === false) {
        formAddError(input);
        error++;
      } else {
        if (input.getAttribute('type') === 'text' && input.value === '') {
          formAddError(input);
          error++;
          console.log(error);
        }
      }
    });

    return error;
  }

  const fileInput = document.getElementById('file'),
    formPreview = document.querySelector('.file__preview');

  fileInput.onchange = () => uploadFile(fileInput.files[0]);

  function uploadFile(file) {
    if (!['image/jpeg', 'image/jpg', 'image/png', 'image/gif', 'image/avif', 'image/webp'].includes(file.type)) {
      alert('Разрешены только изображения');
      fileInput.value = '';
      return;
    }
    if (file.size > 2 * 1024 * 1024) {
      alert('Файл должен быть менее 2 МБ');
      return;
    }

    const reader = new FileReader();
    reader.onload = event => {
      formPreview.innerHTML = `<img src="${event.target.result}" alt="Загруженное изображение">`;
    };
    reader.onerror = () => {
      alert('Ошибка');
    };
    reader.readAsDataURL(file);
  }
}

function formAddError(input) {
  input.parentElement.classList.add('_error');
  input.classList.add('_error');
}
function formRemoveError(input) {
  input.parentElement.classList.remove('_error');
  input.classList.remove('_error');
}
function emailTest(input) {
  const regularExtension = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return regularExtension.test(input.value);
}
