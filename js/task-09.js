function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const colorText = document.querySelector(`.color`);
const colorBtn = document.querySelector(`.change-color`);
const bodyBackgroundColor = document.body;

const changeBackgroundColor =  () => {
  colorText.textContent = bodyBackgroundColor.style.backgroundColor = getRandomHexColor();

};

colorBtn.addEventListener(`click`, changeBackgroundColor);
