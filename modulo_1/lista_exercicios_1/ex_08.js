// 8. Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais)
// e escreve-los em ordem crescente.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const numero1 = Number(prompt("Digite o primeiro número: "));
const numero2 = Number(prompt("Digite o segundo número: "));

if (numero1 < numero2){console.log("Número menor: " + numero1 + " Número maior: " + numero2 )}
else if (numero2 < numero1){console.log("Número menor: " + numero2 + " Número maior: " + numero1 )}
else if (numero2 == numero1){console.log("Os números são iguais")}
else {console.log("Algo deu errado. Tente de novo.")}
