const hamburger = document.querySelector('.hamburger');
const mobileMenu = document.querySelector('.mobile-menu');

hamburger.addEventListener('click', function () {
  hamburger.classList.toggle('hamburger_opened');
  mobileMenu.classList.toggle('mobile-menu_opened');
  root.classList.toggle('overflow');
});
