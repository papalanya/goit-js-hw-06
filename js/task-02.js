// Напиши скрипт, который для каждого элемента массива ingredients:

// Создаст отдельный элемент <li>. Обзательно используй метод document.createElement().
// Добавит название ингредиента как его текстовое содержимое.
// Добавит элементу класс item.
// После чего вставит все <li> за одну операцию в список ul#ingredients.

const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];

const ulEl = document.querySelector('ul');

const elements = [];
for(let i = 0; i < ingredients.length; i+= 1 ){
const element = ingredients[i];

const ilEl = document.createElement('li');
ilEl.textContent = element;
ilEl.classList.add('item');

elements.push(ilEl);
}

ulEl.append(...elements);