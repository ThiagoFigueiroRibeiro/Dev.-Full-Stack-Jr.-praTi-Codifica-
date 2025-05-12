// 13. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer
// a média aritmética desses números.
// Node.js v22.15.0.

const prompt = require('prompt-sync')();
eZero = Boolean(false);
soma = Number(0);
i = Number(0);
while (!eZero){
    numero = Number(prompt("Digite um número: "));
    if (numero == 0){eZero=true}
    else {soma = numero + soma; i++;}
}
console.log("A média dos números digitados é " + soma/i)