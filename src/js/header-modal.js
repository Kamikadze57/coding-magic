(() => {
  const refs = {
    openHeaderModalBtn: document.querySelector('[data-header-modal-open]'),
    closeHeaderModalBtn: document.querySelector('[data-header-modal-close]'),
    headerModal: document.querySelector('[data-header-modal]'),
  };
  document.body.classList.toggle('no-scroll');
  refs.openHeaderModalBtn.addEventListener('click', toggleModal);
  refs.closeHeaderModalBtn.addEventListener('click', toggleModal);

  function toggleModal() {
    refs.headerModal.classList.toggle('is-hidden');
    document.body.classList.toggle('no-scroll');
  }
})();

document.addEventListener('DOMContentLoaded', () => {
  const nameInput = document.querySelector('[data-name-input]');
  const nameElement = document.querySelector('[data-name]');
  const submitButton = document.querySelector('[data-name-submit]');
  const headerModal = document.querySelector('[data-header-modal]');

  function saveName(name) {
    localStorage.setItem('userName', name);
  }
  function getName() {
    return localStorage.getItem('userName') || '';
  }
  function setUserName(name) {
    nameElement.textContent = `Вітаємо, ${name}!`;
    nameElement.setAttribute('data-name', `Вітаємо, ${name}!`);
  }
  const savedName = getName();
  if (savedName) {
    setUserName(savedName);
  }

  submitButton.addEventListener('click', () => {
    const newName = nameInput.value.trim();
    if (newName === '') {
      alert("Будь ласка, введіть ім'я!");
      return;
    }
    setUserName(newName);
    saveName(newName);
    headerModal.classList.add('is-hidden');
    document.body.classList.remove('no-scroll');
  });
});