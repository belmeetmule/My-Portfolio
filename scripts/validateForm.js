const form = document.forms[0];
const email = document.getElementById('email');
const error = document.getElementById('error');
const message = document.querySelector('.error-message');
console.log(message);
form.addEventListener('submit', (event) => {
  const messageWhileError = [];
  if (email.value.match(/[A-Z]/)) {
    messageWhileError.push('Email should be written in lowercase letters.');
    error.innerHTML = messageWhileError.join(', ');
    message.style.display = 'block';
    event.preventDefault();
    event.stopPropagation();
  }
});