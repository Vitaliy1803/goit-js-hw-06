const inputSizeRef = document.getElementById(`font-size-control`);
const textRef = document.getElementById(`text`);


function fontSizeRanger(event) {
textRef.style.fontSize = event.currentTarget.value + `px`;
}

inputSizeRef.addEventListener(`input`, fontSizeRanger);