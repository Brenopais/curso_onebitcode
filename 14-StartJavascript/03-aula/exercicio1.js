//solicita ao usuario um numero
let numero = parseInt(prompt("digite um numero"));
let texto = ""

//loop de 1 a 10 para calcular a tabuada
for (let i = 1; i <= 10; i++) {
  let resultado = numero * i;
  // Acrescenta uma nova linha no texto final
  texto += `${numero} x ${i} = ${resultado}\n`; //texto = text +...
}

//Exibe o resultado
alert(texto)