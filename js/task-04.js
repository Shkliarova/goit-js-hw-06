
const value = document.querySelector('#value');
let counterValue = 0;

const counter = document.querySelector('#counter');
counter.firstElementChild.addEventListener('click', decrement);
counter.lastElementChild.addEventListener('click', increment);

function decrement(){
    counterValue -= 1;
    value.textContent = counterValue;
}

function increment(){
    counterValue += 1;
    value.textContent = counterValue;
}

