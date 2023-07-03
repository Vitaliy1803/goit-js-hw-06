const inputSizeRef = document.getElementById(`font-size-control`);
const textRef = document.getElementById(`text`);


const fontSizeRanger = () =>
(textRef.style.fontSize = `${inputSizeRef.value}px`);

fontSizeRanger();
inputSizeRef.addEventListener(`input`, fontSizeRanger);