const valorHora = document.querySelector ('#valor-hora');
const totalHoras = document.querySelector ('#horas-projeto');
const valorResultado = document.querySelector ('#resposta');
const segundoTexto = document.querySelector ('#texto2')


const button = document.getElementById ('botao');


button.addEventListener ("click", function totalValor () {
    const valor = valorHora.valueAsNumber;
    const horas = totalHoras.valueAsNumber;
    const resultado = (valor * horas);

 if (isNaN(valor) || isNaN(horas)) {
  return resposta.innerHTML = 'Preencha os campos.', segundoTexto.innerHTML = null;} 
 else if (valor == 0|| horas == 0) {
  return resposta.innerHTML = 'Preencha os campos.'}
 else {
  return resposta.innerHTML = 'Preço total: R$ ' +resultado.toFixed(2) + '.'}; 
 }) 

button.addEventListener ("click", function totalValor () {
    const valor = valorHora.valueAsNumber;
    const horas = totalHoras.valueAsNumber;
    const resultado = (valor * horas);

 if (resultado <= 100 && valor != undefined && valor != 0 && horas != undefined && horas != 0) {
  return segundoTexto.innerHTML = "Se dê valor, procure algo melhor."}
 else if (resultado <= 499 && resultado >= 101) {
  return segundoTexto.innerHTML = "Legal! Porém, ainda poderia ser melhor."}
 else if (resultado >= 500 && valor != undefined && horas != undefined) {
  return segundoTexto.innerHTML = "Simplesmente incrível, melhor aceitar logo!";}

})


