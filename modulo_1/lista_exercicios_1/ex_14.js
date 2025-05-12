// 14. Crie um programa que calcula o fatorial de um número fornecido pelo usuário
// utilizando um loop for ou while.
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
numero = Number(prompt("Digite um número: "));
fac = Number(1);
while (numero > 0){
    fac = numero * fac;
    numero--;
}
console.log("O fatorial dos numeros digitados é " + fac)