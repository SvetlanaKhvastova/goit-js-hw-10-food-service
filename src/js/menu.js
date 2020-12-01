// получаем массив данных
import dataMenu from '../menu.json';

// получаем доступы к статике html
import ref from '../js/refs.js';
// деструктуризируем
const { menuSection } = ref;

// получаем доступ к готовому шаблону разметки
import menuTemplates from '../templates/menu.hbs';
//записываем массив в шаблон
const newMenu = menuTemplates(dataMenu);

// встраиваем в DOM
menuSection.insertAdjacentHTML('afterbegin', newMenu);
