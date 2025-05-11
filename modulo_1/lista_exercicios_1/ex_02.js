//  2. Crie um programa que classifica a idade de uma pessoa em categorias (criança,
//  adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de
//  controle if-else.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const number = Number(prompt("Qual é a idade da pessoa: "));

if (number <= 10){console.log("Essa pessoa é uma criança.")}
else if (number <= 18 && number > 10){console.log("Essa pessoa é um adolescente.")}
else if (number <= 60 && number > 18){console.log("Essa pessoa é um adulto.")}
else if (number <= 120 && number > 60){console.log("Essa pessoa é um adulto.")}
else if (number > 120){console.log("Essa pessoa é um matusalém!")}
else {console.log("Algo deu errado. Tente novamente mais tarde.")}
