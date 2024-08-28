//Gera um numero aleatorio entre 1 e 100
const numeroAleatorio = Math.floor(Math.random() * 100) + 1;

//Numero maximo de tentativas
const maxTentativas = 10;
let tentativas = 0;

// loop para adivinhar o numero
for (tentativas = 1; tentativas <= maxTentativas; tentativas++) {
  const palpite = parseInt(prompt (`tentativa ${tentativas}/${maxTentativas}. advinhe o numero (entre 1 e 100):`));

  if (isNaN(palpite) || palpite < 1 || palpite > 100) {
    alert("por favor, insira um numero valido entre 1 e 100.");
    tentativas--;
  }else if (palpite === numeroAleatorio) {
    alert(`Parabens! você acertou o numero ${numeroAleatorio} em ${tentativas} tentativas.`);
    break
  } else if (palpite < numeroAleatorio) {
    alert("Tente um numero maior.");
  } else {
    alert ("Tente um numero menor.");
  }
}

if (tentativas > maxTentativas) {
  alert(`Suas ${maxTentativas} tentativas acabaram. o numero era ${numeroAleatorio}.`);
}