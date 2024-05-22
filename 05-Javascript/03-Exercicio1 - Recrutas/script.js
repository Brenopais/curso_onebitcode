const primeiroNome = prompt("Informe o primeiro nome do recruta:");
const sobrenome = prompt("Informe o sobrenome do recruta:");
const campoDeEstudo = prompt("Qual é o campo de estudo do recruta?");
const anoDeNascimento = parseInt(prompt("Qual é o ano de nascimento do recruta?"));

alert(
  `Recruta cadastrado com sucesso!
  
Nome completo: ${primeiroNome} ${sobrenome}
Campo de estudo: ${campoDeEstudo}
Idade: ${2024 - anoDeNascimento}`
);
