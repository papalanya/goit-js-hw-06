function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// Напиши скрипт, который изменяет цвета фона элемента <body>
// через инлайн стиль при клике на button.change-color и выводит значение цвета в span.color.

const toggle = document.querySelector('.change-color');
const colorText = document.querySelector('.color');

toggle.addEventListener('click', () => {
  colorText.textContent = getRandomHexColor();
  document.body.setAttribute('style', 'background-color: ' + colorText.textContent
  );
});