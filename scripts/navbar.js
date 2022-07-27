const menu = document.querySelector('.menu');
const menuItems = document.querySelectorAll('.menuItem');
const closeIcon = document.querySelector('.closeIcon');
const menuIcon = document.querySelector('.menuIcon');
const navHeader = document.querySelector('header');

function toggleMenu() {
  if (menu.classList.contains('showMenu')) {
    menu.classList.remove('showMenu');
    closeIcon.style.display = 'none';
    menuIcon.style.display = 'block';
    navHeader.style.position = 'fixed';
  } else {
    menu.classList.add('showMenu');
    closeIcon.style.display = 'block';
    menuIcon.style.display = 'none';
    navHeader.style.position = 'relative';
  }
}
closeIcon.addEventListener('click', toggleMenu);
menuIcon.addEventListener('click', toggleMenu);

document.querySelectorAll('.menuItem').forEach((i) => i.addEventListener('click', toggleMenu));
