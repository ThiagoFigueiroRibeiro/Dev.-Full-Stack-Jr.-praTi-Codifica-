// 10. Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
// utilizando um loop for.
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite o número que você quer repetir: "));
for (i = 10;i>0;i--){console.log(numero)}