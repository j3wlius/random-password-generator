const generateBtn = document.querySelector('.generate');
copyBtn = document.querySelector('.password button');

const lowercaseCb = document.getElementById('lowercaseCb');
const uppercaseCb = document.getElementById('uppercaseCb');
const numCb = document.getElementById('numCb');
const charCb = document.getElementById('charCb');
const passwordInput = document.querySelector('#password');

const passwordLength = document.querySelector('#range');

passwordLength.addEventListener('click', () => {
  document.querySelector('.range span').innerHTML = passwordLength.value;
});

// function to generate passwords
function generatePassword() {
  let dictionary = '';
  if (lowercaseCb.checked) {
    dictionary += 'abcdefghijklmnopqrstuvwxyz';
  }
  if (uppercaseCb.checked) {
    dictionary += 'ABCDEFGHIJKLMNOPRSTUVWXYZ';
  }
  if (numCb.checked) {
    dictionary += '1234567890';
  }
  if (charCb.checked) {
    dictionary += '!@#$%^&*()_+=-{}[]><;';
  }

  if (passwordLength.value < 8 || dictionary.length === 0) {
    return;
  }

  let password = '';
  for (i = 0; i < passwordLength.value; i++) {
    const randomNumber = Math.floor(Math.random() * dictionary.length);
    password += dictionary[randomNumber];
  }

  return (passwordInput.value = password);
}

generateBtn.addEventListener('click', generatePassword);


// function to copy generated password & clear password field
function copyToClipboard() {
  navigator.clipboard.writeText(passwordInput.value).then(() => {
    copyBtn.innerHTML = 'copied!';
    setTimeout(() => {
      copyBtn.innerHTML = 'copy';
    }, 2000);
  });

  passwordInput.value = '';
}

copyBtn.addEventListener('click', () => {
  copyToClipboard();
});
