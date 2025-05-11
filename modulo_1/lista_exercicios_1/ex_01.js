// 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar 
// utilizando uma estrutura de controle if.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const number = Number(prompt("Escreva um número inteiro: "));

if (number%2 == 0){console.log("O número é par")} 
else if (number%2 != 0) {console.log("O número é impar")}
else {console.log("Algo deu errado. Tente novamente mais tarde.")}
