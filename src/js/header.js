document.addEventListener('click', function (event) {
  const headerItem = document.querySelector('.header__item');
  const isButton = event.target.closest('.header__btn');

  if (!headerItem.contains(event.target)) {
    headerItem.classList.remove('open');
    return;
  }
  if (isButton) {
    headerItem.classList.toggle('open');
  }
});
