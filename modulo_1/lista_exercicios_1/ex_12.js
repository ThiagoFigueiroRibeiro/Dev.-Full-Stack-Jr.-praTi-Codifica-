// 12. Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a
// 10) utilizando um loop for.
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
const numero = Number(prompt("Digite o número que você quer a tabuada: "));

for (i = 1;i<=10;i++){
    console.log( numero + "x" + i + "=" + numero*i);}
