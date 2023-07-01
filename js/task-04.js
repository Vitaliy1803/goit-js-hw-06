let counterValue = 0;
const valueRef = document.getElementById(`value`);
const btnDecrement = document.querySelector(`[data-action = "decrement"]`);
const btnIncrement = document.querySelector(`[data-action = "increment"]`);

const clickDecrementBtn = (event) => {
    counterValue -= 1;
    valueRef.textContent = counterValue;
} 

const clickIncrementBtn = (event) => {
    counterValue += 1;
    valueRef.textContent = counterValue;
}

btnDecrement.addEventListener(`click`, clickDecrementBtn);
btnIncrement.addEventListener(`click`, clickIncrementBtn);