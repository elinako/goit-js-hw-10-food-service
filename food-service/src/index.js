import menuItems from './menu.json';
import templateMenuItem from './menu-list.hbs';
import './styles.css';

const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const body = document.getElementById('body');
const switcher = document.querySelector('.js-switch-input');
const itemList = document.querySelector('.js-menu');

switcher.addEventListener('change', themeChanger);

const checker = () => {
  body.classList.contains('dark-theme')
    ? (switcher.checked = true)
    : (switcher.checked = false);
};

if (localStorage.getItem('theme') === 'dark-theme') {
  body.classList.replace('light-theme', 'dark-theme');
  checker();
}

function themeChanger() {
  body.classList.toggle('light-theme');
  body.classList.toggle('dark-theme');
  checker();
  if (body.classList.contains('dark-theme')) {
    localStorage.setItem('theme', Theme.DARK);
  } else if (body.classList.contains('light-theme')) {
    localStorage.setItem('theme', Theme.LIGHT);
  }
}

menuCreator(menuItems);

function menuCreator(menuItems) {
  const markup = menuItems.map(item => templateMenuItem(item)).join('');
  itemList.insertAdjacentHTML('afterbegin', markup);
}
