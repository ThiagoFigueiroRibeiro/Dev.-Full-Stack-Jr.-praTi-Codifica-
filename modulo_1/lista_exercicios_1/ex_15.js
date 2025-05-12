// 15. Escreva um programa que gera e imprime os primeiros 10 números da sequência de
// Fibonacci utilizando um loop for
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
numeroAnterior = Number(0);
numeroAtual = Number(1);
numeroPosterior = Number(0);

console.log(numeroAnterior);
console.log(numeroAtual);

while (numeroPosterior <= 3000){

    numeroPosterior = numeroAtual + numeroAnterior;
    console.log(numeroPosterior);
    numeroAnterior = numeroAtual;
    numeroAtual = numeroPosterior;
    
}
