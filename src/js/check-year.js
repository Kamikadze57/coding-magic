const inputYear = document.querySelector('[data-inputYear]');
const btnYear = document.querySelector('[data-btnYear]');
const textYear = document.querySelector('[data-textYear]');

btnYear.addEventListener('click', () => {
  const year = parseInt(inputYear.value);

  if (isNaN(year) || inputYear.value.trim() === '') {
    textYear.textContent = 'Будь ласка, введіть рік!';
    textYear.style.color = 'red';
    return;
  }

  const isLeapYear = (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;

  if (isLeapYear) {
    textYear.textContent = 'Ви народилися у високосний рік!';
    textYear.style.color = 'green';
  } else {
    textYear.textContent = 'Ви народилися не у високосний рік!';
    textYear.style.color = 'red';
  }
});
