//Solicita o valor da compra 
let valorCompra = parseFloat(prompt("Digite o valor da compra: "))

//solicita ao usuario a porcentagem do desconto
let porcentagemDesconto = parseFloat(prompt("Digite a porcentagem de desconto: "));

// calcula o valor do desconto
let desconto = (porcentagemDesconto / 100) * valorCompra;

//calcula o total com o desconto aplicado
let totalComDesconto = valorCompra - desconto;

//Exibe os resultados usando template strings
alert(`Valor da compra: R$ ${valorCompra}
  valor do desconto: R$ ${desconto}
  Total com desconto: R$ ${totalComDesconto}`);