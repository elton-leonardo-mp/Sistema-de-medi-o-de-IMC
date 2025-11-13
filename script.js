const calcularButton = document.getElementById("calcular");
const resultadoElement = document.getElementById("resultado");

calcularButton.addEventListener("click", calcularIMC);

function calcularIMC() {
  const altura = parseFloat(document.getElementById("altura").value);
  const peso = parseFloat(document.getElementById("peso").value);
  const imc = peso / (altura * altura);
  let classificacao;

  if (imc < 18.5) {
    classificacao = "Magreza";
  } else if (imc < 25) {
    classificacao = "Peso normal";
  } else if (imc < 30) {
    classificacao = "Sobrepeso";
  } else if (imc < 35) {
    classificacao = "Obesidade tipo 1";
  } else if (imc < 40) {
    classificacao = "Obesidade tipo 2";
  } else if (imc > 40) {
    classificacao = "Obesidade tipo 3";
  }

  resultadoElement.textContent = `Seu IMC é ${imc.toFixed(
    2
  )} . Você está com ${classificacao}.`;
}

document.getElementById("limpar").addEventListener("click", function () {
  document.getElementById("altura").value = "";
  document.getElementById("peso").value = "";
  document.getElementById("resultado").textContent = "";
});
