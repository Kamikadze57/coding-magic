const dropbtn = document.querySelector('[dropbtn]');
const dropdownContent = document.querySelector('[drop-content]');

dropbtn.addEventListener('click', () => {
  dropdownContent.style.display = 'block';
});

document.addEventListener('click', event => {
  if (
    !event.target.matches('[drop-content]') &&
    !event.target.matches('[dropbtn]')
  ) {
    dropdownContent.style.display = 'none';
  }
});

document.addEventListener('DOMContentLoaded', () => {
  const themeToggle = document.getElementById('theme-toggle');
  const body = document.body;

  if (localStorage.getItem('theme') === 'dark') {
    body.classList.add('dark-theme');
    themeToggle.checked = true;
  }

  themeToggle.addEventListener('change', () => {
    if (themeToggle.checked) {
      body.classList.add('dark-theme');
      localStorage.setItem('theme', 'dark');
    } else {
      body.classList.remove('dark-theme');
      localStorage.setItem('theme', 'light');
    }
  });
});
