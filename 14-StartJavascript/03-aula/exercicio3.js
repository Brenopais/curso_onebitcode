//Cria as variaveis necessárias
let totalNotas = 0;
let quantidadeNotas = 0;
let nota;

do {
  //solicita a nota e converte para um valor numerico
  nota = parseFloat(promt("Digite uma nota do aluno (ou -1 para sair e calcular a média)"));
  //se a nota e converte para um valor numerico
  if (nota!== -1) {
    totalNotas += nota;
    quantidadeNotas++;
  }
} while (nota !== -1); // se a nota for -1 encerra o loop

if (quantidadeNotas === 0) {
  alert("nenhuma nota foi inserida.")
} else {
  //calcula a media
  let media = totalNotas / quantidadeNotas;
  alert("A media das notas é: " + media.toFixed(2));
}