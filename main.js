const inputA = document.getElementById("numeroA");
const inputB = document.getElementById("numeroB");
const button = document.getElementById("botao");
const alert = document.getElementById("erro");
const sucess = document.getElementById("sucesso");

const message = {
  error:
    `Erro ao enviar o formulário. É obrigatório que o Valor B seja maior que o Valor A!`,
  sucess: 
  "Formulário enviado com sucesso!",
};

function validaNumero(e) {
  e.preventDefault();
  if (inputA.value.length <= 0 || inputB.value.lenth <= 0) return;

  if (Number(inputA.value) < Number(inputB.value)) {
    const textError = document.getElementById("text-erro");
    const textSucess = document.getElementById("text-sucess");

    if (textError) {
     
    }

    if (textSucess) {
      return;
    }

    const p = document.createElement("p");
    p.id = "text-sucess";
    p.innerText = message.sucess;
    sucess.appendChild(p);
  } else {
    const textSucess = document.getElementById("text-sucess");
    const textError = document.getElementById("text-erro");

    if (textSucess) {
      textSucess.remove();
    }

    if (textError) {
      return;
    }

    const p = document.createElement("p");
    p.id = "text-erro";
    p.innerText = message.error;
    alert.appendChild(p);
  }
}

button.addEventListener("click", validaNumero);