const upperCaseCheckEl = document.querySelector("#UpperCase-check");
const numbersCheckEl = document.querySelector("#Numbers-check");
const symbolCheckEl = document.querySelector("#Symbols-check");
const securityIndicatorBarEl = document.querySelector(
  "#security-indicator-bar"
);

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

function calculateQuality() {
  const percent = Math.round(
    (PasswordLength / 64) * 100 * 25 +
      (upperCaseCheckEl.checked ? 15 : 0) +
      (numbersCheckEl.checked ? 25 : 0) +
      (symbolCheckEl.checked ? 35 : 0)
  );

  securityIndicatorBarEl.style.width = `${percent}%`;

  if (percent > 69) {
    securityIndicatorBarEl.classList.remove("critical");
    securityIndicatorBarEl.classList.remove("warning");
    securityIndicatorBarEl.classList.add("safe");
  } else if (percent > 50) {
    securityIndicatorBarEl.classList.remove("critical");
    securityIndicatorBarEl.classList.add("warning");
    securityIndicatorBarEl.classList.remove("safe");
  } else {
    securityIndicatorBarEl.classList.add("critical");
    securityIndicatorBarEl.classList.remove("warning");
    securityIndicatorBarEl.classList.remove("safe");
  }

  if(percent >= 100){
    securityIndicatorBarEl.classList.add("completed")
  }else{
    securityIndicatorBarEl.classList.remove("completed")

  }
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

  //pega o contador e mostra o tamanho da senha
  document.querySelector("#password-lenght-text").innerText = PasswordLength;
});

upperCaseCheckEl.addEventListener("click", generatePassword);
numbersCheckEl.addEventListener("click", generatePassword);
symbolCheckEl.addEventListener("click", generatePassword);

//adiciona o evento de cópia ao botão e simbolo do html
buttonHTML.addEventListener("click", copy);
copySymbol.addEventListener("click", copy);

generatePassword();
