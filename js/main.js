/*----- constants -----*/ 

/*----- app's state (variables) -----*/ 
let currentNum;

/*----- cached element references -----*/
const number = document.querySelector('p');
const plusBtn = document.querySelector('.plus-btn')
const minusBtn = document.querySelector('.minus-btn')

/*----- event listeners -----*/ 
plusBtn.addEventListener('click', add);
minusBtn.addEventListener('click', subtract);

/*----- functions -----*/
init();

function init() {
  currentNum = 0;
}

function add(event) {
  currentNum += parseInt(document.querySelector('input').value);
  number.innerHTML = currentNum;
  negativeNumCheck(currentNum);
}

function subtract(event) {
  currentNum -= parseInt(document.querySelector('input').value);
  number.innerHTML = currentNum;
  negativeNumCheck(currentNum);
}

function negativeNumCheck(num) {
  num < 0 ? number.style.color = 'red' : number.style.color = 'black';
}