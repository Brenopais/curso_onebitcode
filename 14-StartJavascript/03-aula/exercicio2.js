// solicita ao usuario um numero inteiro positivo
let num = parseInt(prompt("Digite um numero inteiro positivo:"));
let fatorial = 1;

//calcula o fatorial usando um loop for
for (let i = 1; i <= num; i++) {
  fatorial *= i;
}

//exibe o resultado
alert(`O fatorial de ${num} é ${fatorial}`);