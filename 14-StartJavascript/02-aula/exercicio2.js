//solicita ao usuario que insira o primeiro numero
let numero1 = prompt("Digite o primero numero:")
//solicita ao usuario que insira o segundo numero
let numero2 = prompt("Digite o segundo numero:")

//converte os valores inseridos pelo usuario para numeros
numero1 = parseFloat(numero1)
numero2 = parseFloat(numero2)

//exibe o resultado
alert(`resultado da soma: ${numero1 + numero2}
resultado da subtração: ${numero1 - numero2}
resultado da multiplicação: ${numero1 * numero2}
resultado da divisão: ${numero1 / numero2}`);