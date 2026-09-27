const prompt = require('prompt-sync')();

console.log('Contagem regressiva:');
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
console.log('Fim da contagem regressiva!');

let i=1;
let soma=0;
do {
    soma += i;
    i++;
} while (i <= 10);
console.log(`A soma dos números de 1 a 10 é: ${soma}`);

let numero = 3;
let adivinha = Number(prompt('Adivinhe o número (entre 1 e 5): '));
while (adivinha !== numero) {
    adivinha = Number(prompt('Tente novamente! Adivinhe o número (entre 1 e 5): '));
}
console.log('Parabéns! Você acertou!');