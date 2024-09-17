//importamos ela de outro arquivo
import {dobro} from '.\funcoes.js';

//Solicitamos ao usuario um numero
let numero = parseFloat(prompt("Digite um numero: "));

if (!isNaN(numero)) {
  //Se for um numero valido, executamos a função dobro()
  let resultado = dobro(numero);
  alert(`O dobro de ${numero} é ${resultado}`)
} else {
  alert("Por favor, insira um numero valido.");
}
