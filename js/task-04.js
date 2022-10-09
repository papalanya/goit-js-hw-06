// Создай переменную counterValue в которой будет храниться текущее значение счетчика и инициализируй её значением 0.
// Добавь слушатели кликов на кнопки, внутри которых увеличивай или уменьшай значение счтетчика.
// Обновляй интерфейс новым значением переменной counterValue.



const decrementBtn = document.querySelector('[data-action="decrement"]');
const incrementBtn = document.querySelector('[data-action="increment"]');
const valueEl = document.getElementById('value');

let counterValue = 0;

const dec = () => {
    counterValue -= 1;
    valueEl.textContent = counterValue;
};

const inc = () => {
    counterValue += 1;
    valueEl.textContent = counterValue;
};

decrementBtn.addEventListener('click', dec);
incrementBtn.addEventListener('click', inc);

