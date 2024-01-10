export function menuBurger() {
  const menuIcon = document.querySelector('.menu-icon'),
    menu = document.querySelector('.menu'),
    body = document.querySelector('body'),
    header = document.querySelector('.header');

  const scrollWidth = window.innerWidth - document.querySelector('.wrapper').offsetWidth;

  menuIcon.onclick = toggleClass;

  const headerObserver = new IntersectionObserver(callback);
  headerObserver.observe(header);

  function toggleClass() {
    menuIcon.classList.toggle('_active');
    menu.classList.toggle('_active');
    body.classList.toggle('_lock');
    setPaddingRight();
  }

  function callback(entries, observer) {
    if (entries[0].isIntersecting) {
      header.classList.remove('_scroll');
    } else {
      header.classList.add('_scroll');
    }
  }

  function setPaddingRight() {
    if (menuIcon.classList.contains('_active')) {
      menuIcon.style.marginRight = scrollWidth + 'px';
    } else {
      menuIcon.style.marginRight = '0px';
    }
  }
}
