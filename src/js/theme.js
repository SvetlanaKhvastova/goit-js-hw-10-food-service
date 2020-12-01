const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

import '../styles.css';
import ref from '../js/refs.js';
const { body, themeSwitch } = ref;

body.addEventListener('change', addClassTheme(Theme));
themeSwitch.addEventListener('change', getLocalStorage(Theme));

function addClassTheme(e) {
  if (themeSwitch.checked) {
    body.classList.add(e.DARK);
    body.classList.remove(e.LIGHT);
    localStorage.setItem('Theme', e.DARK);
  } else {
    localStorage.removeItem('Theme');
    body.classList.add(e.LIGHT);
    body.classList.remove(e.DARK);
    localStorage.setItem('Theme', e.LIGHT);
  }
}

function getLocalStorage(e) {
  const switchControl = localStorage.getItem('Theme');

  if (switchControl === e.LIGHT) {
    body.classList.add(e.LIGHT);
    themeSwitch.checked = false;
  }
  if (switchControl === e.DARK) {
    body.classList.add(e.DARK);
    themeSwitch.checked = true;
  }
}
