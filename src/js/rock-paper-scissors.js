document.addEventListener('DOMContentLoaded', () => {
  const choices = ['stone', 'scissors', 'paper'];
  let computerChoice = getRandomChoice();
  let userChoice = '';
  let userScore = 0;
  let computerScore = 0;

  const resultText = document.querySelector('.rps__text');
  const computerButton = document.querySelector('.rps-result__btn');
  const scoreItems = document.querySelectorAll('.rps-score__text');
  const buttons = document.querySelectorAll('.rps-choose__btn');

  function getRandomChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
  }

  buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
      userChoice = choices[index];
    });
  });

  computerButton.addEventListener('click', () => {
    let result = getResult(userChoice, computerChoice);
    if (result === 'win') {
      userScore++;
      resultText.textContent = 'Ви виграли раунд!';
      resultText.style.color = 'green';
    } else if (result === 'lose') {
      computerScore++;
      resultText.textContent = 'Комп’ютер виграв раунд!';
      resultText.style.color = 'red';
    } else {
      resultText.textContent = 'Нічия!';
      resultText.style.color = 'blue';
    }

    scoreItems[0].textContent = `Комп'ютер - ${computerScore}`;
    scoreItems[1].textContent = `Ви - ${userScore}`;

    computerChoice = getRandomChoice();
  });

  function getResult(user, computer) {
    if (user === computer) return 'draw';
    if (
      (user === 'stone' && computer === 'scissors') ||
      (user === 'scissors' && computer === 'paper') ||
      (user === 'paper' && computer === 'stone')
    ) {
      return 'win';
    } else {
      return 'lose';
    }
  }
});
