const prompt = require('prompt-sync')();

let teste = 'nível zero';

{
    let segredo = 123;
    console.log(teste);
    console.log(segredo);
}

console.log(teste);
//console.log(segredo); // ReferenceError: segredo is not defined


let idade = Number(prompt('Digite sua idade: '));
let mensagem= 'Mensagem não definida';

while (Number.isNaN(idade)) {
    idade = Number(prompt('Digite sua idade. Apenas números são aceitos: '));
}

if (idade >= 18) {
    mensagem = 'Adulto';
} else {
    mensagem = 'Menor de idade';
}   

console.log(mensagem);