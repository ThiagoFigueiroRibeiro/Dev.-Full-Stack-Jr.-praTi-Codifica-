// 6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos
// formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo:
// Isósceles, escaleno ou eqüilátero.
// Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
// Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B = C)
// Triângulo escaleno: possui todos os lados diferentes (A<>B e B <> C)
// Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C)
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
const lado1 = Number(prompt("Qual é a medida do Lado 1? "));
const lado2 = Number(prompt("Qual é a medida do Lado 2? "));
const lado3 = Number(prompt("Qual é a medida do Lado 3? "));

if (lado1 < lado2 + lado3 && lado2 < lado3 + lado1  && lado3 < lado2 + lado1 ){
    if (lado1==lado2 && lado1==lado3 && lado2==lado3){console.log("O triângulo é equilátero")}
    else if(lado1!=lado2!=lado3){console.log("O triangulo é escaleno")}
    else if ((lado1 == lado2 || lado2 == lado3 || lado3 == lado1)){console.log("O triangulo é isósceles")}
}

else {console.log("As medidas não formam um triângulo.")}
