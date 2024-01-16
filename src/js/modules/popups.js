'use strict';

export function popup() {
  const popupLinks = document.querySelectorAll('._popup-link');
  const body = document.querySelector('body');
  const lockPaddings = document.querySelectorAll('._lock-padding');
  const wrapper = document.querySelector('.wrapper');

  let unlock = true;

  const timeout = 800;

  if (popupLinks.length > 0) {
    popupLinks.forEach(popupLink => {
      popupLink.addEventListener('click', event => {
        event.preventDefault();
        const popupName = popupLink.getAttribute('href').replace('#', '');
        const curentPopup = document.getElementById(popupName);
        popupOpen(curentPopup);
      });
      popupLink.addEventListener('keydown', event => {
        if (event.key === ' ' || event.key === 'spacebar') {
          const popupName = popupLink.getAttribute('href').replace('#', '');
          const curentPopup = document.getElementById(popupName);
          popupOpen(curentPopup);
          event.preventDefault();
        }
      });
    });
  }

  const popupCloseIcons = document.querySelectorAll('._close-popup');
  if (popupCloseIcons.length > 0) {
    popupCloseIcons.forEach(popupCloseIcon => {
      popupCloseIcon.onclick = event => {
        popupClose(event.target.closest('.popup'));
      };
    });
  }

  function popupOpen(curentPopup) {
    if (curentPopup && unlock) {
      const popupActive = document.querySelector('.popup._open');

      if (popupActive) {
        popupClose(popupActive, false);
      } else {
        bodyLock();
      }

      curentPopup.classList.add('_open');
      curentPopup.addEventListener('click', event => {
        if (!event.target.closest('.popup__content')) {
          popupClose(event.target.closest('.popup'));
        }
      });
    }
  }

  function popupClose(popupActive, doUnlock = true) {
    if (unlock) {
      popupActive.classList.remove('_open');
      if (doUnlock) {
        bodyUnlock();
      }
    }
  }

  function bodyLock() {
    const lockPaddingValue = window.innerWidth - wrapper.offsetWidth + 'px';
    if (lockPaddings.length > 0) {
      lockPaddings.forEach(lockPadding => {
        lockPadding.style.paddingRight = lockPaddingValue;
      });
    }
    body.style.paddingRight = lockPaddingValue;
    body.classList.add('_lock');
    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }

  function bodyUnlock() {
    setTimeout(function () {
      if (lockPaddings.length > 0) {
        lockPaddings.forEach(lockPadding => {
          lockPadding.style.paddingRight = '0px';
        });
      }
      body.style.paddingRight = '0px';
      body.classList.remove('_lock');
    }, timeout);

    unlock = false;
    setTimeout(() => {
      unlock = true;
    }, timeout);
  }

  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') {
      const popupActive = document.querySelector('.popup._open');
      popupClose(popupActive);
    }
  });
}

function removeClassFromMenu(selector) {
  const menuIcon = document.querySelector(`${selector}`);
  menuIcon.classList.remove('_active');
}
