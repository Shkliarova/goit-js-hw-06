function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector('.change-color');
const color = document.querySelector('.color');
const body = document.querySelector('body');

button.addEventListener('click', changeColor);

function changeColor(){
  body.style.backgroundColor = color.textContent = getRandomHexColor();
}