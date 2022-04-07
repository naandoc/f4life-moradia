// Validação de email do formulário

const email = document.querySelector("#email");
const emailError = document.querySelector("#error-email");
const mensagem = document.querySelector("#msg");
const msgError = document.querySelector("#error-msg");
const submitBtn = document.querySelector("#btn-form");
const msgUser = document.querySelector("#email-sucess");

//Partes do email
let user = "";
let domain = "";
let emailParteFinal = "";

//Validação do button caso haja sucesso no email/mensagem
let emailSuccess = false;
let msgSucess = false;

function inputError(nomeInput, campoInput, msgDeErro) {
  nomeInput.classList.add("input-invalid");
  campoInput.innerHTML = msgDeErro;
}
function inputCorreto(nomeInput, campoInput) {
  nomeInput.classList.remove("input-invalid");
  campoInput.innerHTML = "";
}

//Validação do email
function emailValido(emailCompleto) {
  user = emailCompleto.substring(0, emailCompleto.indexOf("@"));

  if (emailCompleto.indexOf("@") < emailCompleto.lastIndexOf(".com")) {
    domain = emailCompleto.substring(
      emailCompleto.indexOf("@") + 1,
      emailCompleto.lastIndexOf(".com")
    );
  }

  emailParteFinal = emailCompleto.substring(
    user.length + domain.length + 1,
    emailCompleto.length
  );

  console.log(user, domain, emailParteFinal);

  const regexUser = /^[a-zA-Z0-9.]+$/g;
  const regexDomain = /^[a-z0-9]+$/g;

  if (
    user.length >= 1 &&
    user.length <= 32 &&
    domain.length >= 1 &&
    domain.length <= 16 &&
    emailParteFinal === ".com" &&
    regexUser.test(user) &&
    regexDomain.test(domain)
  ) {
    inputCorreto(email, emailError);
    emailSuccess = true;

    if (emailSuccess && msgSucess) {
      envioSucess();
    }
  } else {
    inputError(email, emailError, "Erro no envio: Endereço de mail inválido");
    msgUser.innerHTML = "";
    emailSuccess = false;
  }
}

function validarMensagem() {
  if (mensagem.value == "") {
    inputError(mensagem, msgError, "Erro no envio: Insira uma mensagem");
    msgSucess = false;
    msgUser.innerHTML = "";
  } else {
    inputCorreto(mensagem, msgError);
    msgSucess = true;
  }
}

function envioSucess() {
  msgUser.innerHTML = `Obrigado pelo contato, ${user}!`;
}

submitBtn.addEventListener("click", (event) => {
  event.preventDefault();

  validarMensagem();
  emailValido(email.value);
});
