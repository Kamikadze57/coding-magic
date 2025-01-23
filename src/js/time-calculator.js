const timeInput = document.querySelector('[data-inputTime]');
const timeResult = document.querySelector('[data-resultTime]');
const timebtn = document.querySelector('[data-btnTime]');

timebtn.addEventListener('click', () => {
  const seconds = parseInt(timeInput.value);
  const hours = Math.floor(seconds / 3600);
  const minutes = Math.floor((seconds % 3600) / 60);
  const remainingSeconds = seconds % 60;

  timeResult.textContent = `${hours}дн. ${minutes}:${remainingSeconds}`;
});