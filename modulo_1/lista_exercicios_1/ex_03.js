// 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como
// "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const number = Number(prompt("Qual é a nota do aluno: "));

if (number < 5){console.log("Reprovado.")}
else if (number < 7 && number >= 5){console.log("Recuperação.")}
else if (number <= 10 && number >= 7){console.log("Aprovado.")}
else {console.log("Algo deu errado. Tente novamente mais tarde.")}
