let PasswordLength = 16;

const inputEl = document.querySelector("#password");

const buttonHTML = document.querySelector('#copyButton')


//gera as senhas
function generatePassword() {
  //caracteres para formar a senha
  const chars = "abcdefghjklmnpqrstuvwxyz123456789?!@&*[]()"; //não existe i nem o para não confundirem com 0 ou 1

  let password = "";

  //percorre e seleciona os caracteres de acordo com quantidade do range
  for (let i = 0; i < PasswordLength; i++) {
    const randomNumber = Math.floor(Math.random() * chars.length);

    password += chars.substring(randomNumber, randomNumber + 1);
  }


  inputEl.value = password;
}

//função para fazer o botão copiar o password
function copy(){

    navigator.clipboard.writeText(inputEl.value)

    buttonHTML.innerHTML = 'copiado!'
}

//implementa a função do range
const PasswordLengthEl = document.querySelector("#size");
PasswordLengthEl.addEventListener("input", function () {
  PasswordLength = PasswordLengthEl.value;
  
  generatePassword()
});

//adiciona o evento de cópia ao botão do html
buttonHTML.addEventListener("click", copy)

//mostra ao usuário que a senha foi copiada



generatePassword();
