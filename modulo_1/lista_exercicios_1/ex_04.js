//4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
// Utilize switch-case para implementar a lógica de cada opção selecionada.
// Node.js v22.15.0.
// ATENÇÂO: VocÊ vai precisar instalar o "prompt" pra o código funcionar: npm install prompt-sync

const prompt = require('prompt-sync')();
console.log("Escolha uma das opções a seguir: A, B ou C")
const option = prompt("Qual opção você escolhe? ");

switch(option){
    case "A":
        console.log("Você escolheu a opção A")
        break;
    case "B":
        console.log("Você escolheu a opção B")
        break;
    case "C":
        console.log("Você escolheu a opção C")
        break;
    default:
        console.log("Algo deu errado. Tente novamente.")
        break;
    }

