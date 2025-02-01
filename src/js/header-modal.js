window.onload = function () {
  document.getElementById('welcomePopup').style.display = 'block';
};

function closePopup() {
  document.getElementById('welcomePopup').style.display = 'none';
}

function saveName() {
  let name = document.getElementById('username').value;
  if (name) {
    alert('Ім’я збережено: ' + name);
    closePopup();
  } else {
    alert('Будь ласка, введіть ім’я.');
  }
}