'use strict';

export function menuBurger() {
  const header = document.querySelector('.header'),
    menu = header.querySelector('.menu'),
    menuIcon = header.querySelector('.menu-icon');

  const body = document.querySelector('body');

  menuIcon.onclick = toggleClass;

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(header);

  function toggleClass() {
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
  }

  function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      header.classList.remove('_scroll');
    } else {
      header.classList.add('_scroll');
    }
  }
}
