const carro1 = prompt("Insira o nome do carro 1");
const velocidade1 = parseFloat(prompt("Digite a velocidade do carro 1 (KM)"));
const carro2 = prompt("Insira o nome do carro 2");
const velocidade2 = parseFloat(prompt("Digite a velocidade do carro 2 (KM)"));



if ( velocidade1 > velocidade2 ) {
  alert ("Carro mais Rapido " + carro1);
}else if (velocidade2 > velocidade1) {
  alert ("Carro mais rapido: " + carro2);
}else {
  alert ("Ambos os carros têm a mesma velocidade.");
}