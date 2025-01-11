const inputNumber = document.querySelector('[data-inputNumber]');
const btnNumber = document.querySelector('[data-btnNumber]');
const textNumber = document.querySelector('[data-textNumber]');

const randomNumber = Math.floor(Math.random() * 10) + 1;

btnNumber.addEventListener('click', () => {
  const userGuess = parseInt(inputNumber.value);

  if (userGuess === randomNumber) {
    textNumber.textContent = 'Вітаємо! Ви вгадали!';
    textNumber.style.color = 'green';
  } else if (userGuess < randomNumber) {
    textNumber.textContent = 'Загадане число більше';
    textNumber.style.color = 'blue';
  } else {
    textNumber.textContent = 'Загадане число менше';
    textNumber.style.color = 'red';
  }
});
