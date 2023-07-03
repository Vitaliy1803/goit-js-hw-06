const inputStr = document.getElementById(`name-input`);
const outputStr = document.getElementById(`name-output`);


// var1   (XXX) зламав
// const textInput = (event) => {
//     if (inputStr.value !== "") {
//         outputStr.textContent = inputStr.value.trim();
//     }
//    return (outputStr.textContent = "Anonymous");
    
// }

// inputStr.addEventListener(`input`, textInput);


// var2
inputStr.addEventListener(`input`, (event) => {
    if (inputStr.value.trim() === "") {
       return (outputStr.textContent = "Anonymous");
    }
    return (outputStr.textContent = inputStr.value.trim());

} )