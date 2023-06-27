const inputStr = document.getElementById(`name-input`);
const outputStr = document.getElementById(`name-output`);

const textInput = (event) => {
    if (inputStr.value != "") {
        outputStr.textContent = inputStr.value;
    }
    
}

inputStr.addEventListener(`input`, textInput);