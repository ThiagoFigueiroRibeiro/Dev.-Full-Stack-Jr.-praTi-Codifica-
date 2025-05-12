// 11. Escreva um programa que solicita ao usuário 5 números e calcula a soma total
// utilizando um loop for.
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
soma = Number(0);
for (i = 1;i<=5;i++){
    numero = Number(prompt("Digite o número que você quer repetir: "));
    soma = soma + numero}
console.log("A soma é " + soma)