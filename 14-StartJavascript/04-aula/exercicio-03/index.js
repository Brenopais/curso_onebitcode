//importamos o lodash com um nome customizado
import _ from 'lodash';

//executa a função kebabCase
let frase = "Esta é uma Frase de exemplo";
let frasekebabCase = _.kebabCase(frase);
console.log(frasekebabCase);

frase = "Este é um titulo ficticio  para um artigo";
frasekebabCase = _.kebabCase(frase);
console.log(frasekebabCase);