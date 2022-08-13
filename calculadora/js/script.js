const inputRenda = document.querySelector ('#ganho-mes');
const inputHoras = document.querySelector ('#horas-dia');
const inputResultado = document.querySelector ('#resposta');

const calcularValorHora = () => {
  const salario = inputRenda.valueAsNumber;
  const horas = inputHoras.valueAsNumber;
  const diasMes = 30;

  const valorHora = salario / (diasMes * horas);
resposta.innerHTML =  'R$' + valorHora.toFixed(2)

}


