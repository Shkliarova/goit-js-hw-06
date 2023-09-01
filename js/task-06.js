const input = document.querySelector('#validation-input');

input.addEventListener('blur', function(event){
    const symbolLength = input.dataset.length;
    const inputLength = input.value.length;

    if(inputLength === Number(symbolLength)){
        input.classList.remove('invalid');
        input.classList.add('valid');
    } else{
        input.classList.remove('valid');
        input.classList.add('invalid');
    }
})
