// obtendo os lados do triangulo usando o prompt
const ladoA = parseFloat(prompt("digite o comprimento do lado A: "));
const ladoB = parseFloat(prompt("digite o comprimento do lado B: "));
const ladoC = parseFloat(prompt("digite o comprimento do lado C: "));

//Calcula o perimetro do triangulo 
const perimetro = ladoA + ladoB + ladoC;

//calcula a area usando a formula de heron
const sp = perimetro /2; //semiperimetro
const area = Math.sqrt(sp * (sp - ladoA) * (sp - ladoB) * (sp - ladoC));

//exibe os resultados em um alert
alert(`perimetro do triangulo:' ${perimetro}\nÁrea do trinagulo: ${area}`);