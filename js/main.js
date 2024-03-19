const upperCaseCheckEl = document.querySelector("#UpperCase-check");
const numbersCheckEl = document.querySelector("#Numbers-check");
const symbolCheckEl = document.querySelector("#Symbols-check");

let PasswordLength = 16;

const inputEl = document.querySelector("#password");

const buttonHTML = document.querySelector("#copyButton");
const copySymbol = document.querySelector("#copySymbol");

//gera as senhas
function generatePassword() {
  //caracteres para formar a senha
  let chars = "abcdefghjklmnpqrstuvwxyz"; //não existe i nem o para não confundirem com 0 ou 1

  const upperCaseChars = "ABCDEFGHJKLMNPQRSTUVWXYZ";
  const numberChars = "123456789";
  const symbolChars = "?!@&*[]()";

  if (upperCaseCheckEl.checked == true) {
    chars += upperCaseChars;
  } else if (numbersCheckEl.checked == true) {
    chars += numberChars;
  } else if (symbolCheckEl.checked == true) {
    chars += symbolChars;
  }
  let password = "";

  //percorre e seleciona os caracteres de acordo com quantidade do range
  for (let i = 0; i < PasswordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }

  inputEl.value = password;
}

//função para fazer o botão copiar o password
function copy() {
  navigator.clipboard.writeText(inputEl.value);

  //mostra ao usuário que a senha foi copiada
  buttonHTML.innerHTML = "copiado!";
}

//implementa a função do range
const PasswordLengthEl = document.querySelector("#size");
PasswordLengthEl.addEventListener("input", function () {
  PasswordLength = PasswordLengthEl.value;

  generatePassword();
});

upperCaseCheckEl.addEventListener("click", generatePassword);
numbersCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);

//adiciona o evento de cópia ao botão e simbolo do html
buttonHTML.addEventListener("click", copy);
copySymbol.addEventListener("click", copy);

generatePassword();
