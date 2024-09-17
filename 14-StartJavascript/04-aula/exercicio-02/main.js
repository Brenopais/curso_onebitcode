//importamos cada função
import {dobro, somar, subtrair} from '.\funcoes.js';

//criamos algumas funções auxiliares para cada parte do programa
function mostrarMenu(){
  const opcao = prompt(`Escolha uma operação: \n1. dobro de um número\n2. Somar dois numeros \n3. Subtrair dois numeros\n4. Sair`)
  return parseInt(opcao)
}

function calcularDobro(){
  let numero = parseFloat(prompt("Digite um numero: "));
  if (!isNaN(numero)) {
    let resultado = dobro(numero);
    alert(`O dobro de ${numero} é ${resultado}`);
  } else {
    alert("Por favor, insira um numero válido.");
  }
}

function calcularDobro() {
  let numero = parseFloat(prompt("Digite um numero: "));
  if (!isNaN(numero)) {
    let resultado = dobro(numero);
    alert(`O dobro de ${numero} é ${resultado}`);
  } else {
    alert("Por favor, insira um numero válido.");
  }
}


function calcularSoma() {
  let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
  let numero2 = parseFloat(prompt("Digite o segundo numero: "));
  if (!isNaN(numero1) && !isNaN(numero2)) {
    let resultado = somar(numero1, numero2);
    alert(`O dobro de ${numero1} e ${numero2} é ${resultado}`);
  } else {
    alert("Por favor, insira um numero válido.");
  }
}


function calcularSubtracao() {
  let numero1 = parseFloat(prompt("Digite o primeiro numero: "));
  let numero2 = parseFloat(prompt("Digite o segundo numero: "));
  if (!isNaN(numero1) && !isNaN(numero2)) {
    let resultado = subtrair(numero1, numero2);
    alert(`A subitração de ${numero1} e ${numero2} é ${resultado}`);
  } else {
    alert("Por favor, insira um numero válido.");
  }
}


//Criamos uma variavel no escopo externo para salvar a opção escolhida
do {
  escolha = mostrarMenu();
  
  //usamos o switch para executar uma função diferente para cada caso
  switch (escolha) {
    case 1:
      calcularDobro();
      break;
    case 2:
      calcularSoma();
      break;
    case 3:
      calcularSubtracao();
      break;
    case 4:
      alert("saindo...")
      break;
    default:
      alert("Opção invalida. tente Novamente.");
      
  }  

} while (escolha !== 4); //Tudo isso enquanto a escolha for diferente de "4.Sair"