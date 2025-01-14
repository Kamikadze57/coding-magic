const dropbtn = document.querySelector('[dropbtn]');
const dropdownContent = document.querySelector('[drop-content]');

dropbtn.addEventListener('click', () => {
  dropdownContent.style.display = 'block';
});

document.addEventListener('click', (event) => {
  if (!event.target.matches('[drop-content]') && !event.target.matches('[dropbtn]')) {
    dropdownContent.style.display = 'none';
  }
});