const firstNumberInput = document.querySelector('[data-calc-first-num]');
const secondNumberInput = document.querySelector('[data-calc-second-num]');

const addBtn = document.querySelector('[data-add-btn]');
const increaseBtn = document.querySelector('[data-increase-btn]');
const minusBtn = document.querySelector('[data-minus-btn]');
const divideBtn = document.querySelector('[data-divide-btn]');
const buttonDorivneneCalculator = document.querySelector('[data-calc-result-btn]');
const calcResult = document.querySelector('[data-calc-result-text]');

let sign;

buttonDorivneneCalculator.addEventListener('click', () => {
  if (sign === '+') {
    calcResult.textContent =
      Number(firstNumberInput.value) + Number(secondNumberInput.value);
  } else if (sign === '-') {
    calcResult.textContent =
      Number(firstNumberInput.value) - Number(secondNumberInput.value);
  } else if (sign === '*') {
    calcResult.textContent =
      Number(firstNumberInput.value) * Number(secondNumberInput.value);
  } else if (sign === '/') {
    calcResult.textContent =
      Number(firstNumberInput.value) / Number(secondNumberInput.value);
  } else {
    calcResult.textContent = 'помилка';
  }
});

addBtn.addEventListener('click', e => {
  sign = '+';
  addBtn.style.backgroundColor = 'green';
  increaseBtn.style.backgroundColor = 'black';
  minusBtn.style.backgroundColor = 'black';
  divideBtn.style.backgroundColor = 'black';
});

increaseBtn.addEventListener('click', e => {
  sign = '*';
  increaseBtn.style.backgroundColor = 'green';
  addBtn.style.backgroundColor = 'black';
  minusBtn.style.backgroundColor = 'black';
  divideBtn.style.backgroundColor = 'black';
});

minusBtn.addEventListener('click', e => {
  sign = '-';
  minusBtn.style.backgroundColor = 'green';
  addBtn.style.backgroundColor = 'black';
  increaseBtn.style.backgroundColor = 'black';
  divideBtn.style.backgroundColor = 'black';
});

divideBtn.addEventListener('click', e => {
  sign = '/';
  divideBtn.style.backgroundColor = 'green';
  addBtn.style.backgroundColor = 'black';
  increaseBtn.style.backgroundColor = 'black';
  minusBtn.style.backgroundColor = 'black';
});
