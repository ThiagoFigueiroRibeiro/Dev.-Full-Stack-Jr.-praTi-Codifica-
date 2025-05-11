// 7. As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se
// forem compradas pelo menos doze. Escreva um algoritmo que leia o número de maçãs
// compradas, calcule e escreva o valor total da compra
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
console.log("maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25 se forem compradas pelo menos doze")
const numero = Number(prompt("Quantas maças você deseja? "));

if (numero < 12){console.log("Valor total = R$ " + numero*0.3 )}
else if (numero >=12){console.log("Valor total = R$ " + numero*0.25 )}
else {console.log("Algo deu errado. Tente de novo.")}
