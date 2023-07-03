

const inputRef = document.querySelector(`#validation-input`);



function onBlurBorderColor() {
    const inputDataLength = Number(inputRef.dataset.length);
    const inputValueLength = Number(inputRef.value.trim().length);
  
    if (inputValueLength === inputDataLength) {
      inputRef.classList.add('valid');
      inputRef.classList.remove('invalid');
    } else {
      inputRef.classList.remove('valid');
      inputRef.classList.add('invalid');
    }
  };
  inputRef.addEventListener('blur', onBlurBorderColor);
