// 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e
// determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade)
// utilizando if-else.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const peso = Number(prompt("Qual é o seu peso (kg): "));
const altura = Number(prompt("Qual é a sua altura (cm): "));

number = peso/((altura/100)*(altura/100))
console.log(number)
if (number < 18.5){console.log("Abaixo do peso")}
else if (number >= 18.5 && number <25){console.log("Peso normal.")}
else if (number >= 25 && number <30){console.log("Sobrepeso.")}
else if (number >= 30 && number <35){console.log("Obesidade.")}
else if (number >= 35){console.log("Obesidade extrema.")}
else {console.log("Algo deu errado. Tente novamente mais tarde.")}
