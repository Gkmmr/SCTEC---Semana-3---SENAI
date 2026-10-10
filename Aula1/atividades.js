const prompt = require('prompt-sync')();

console.log('Contagem regressiva:');
for (let i = 5; i >= 0; i--) {
    console.log(i);
}
console.log('Já!');




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



for (let i = 1; i <= 5; i++) {
    console.log(i);
}



let contador = 10;
while (contador > 0) {
    contador = contador -3;
}
console.log(contador);



function somar (a, b) {
    return a + b;
}
let resultado = somar(3, 7);
console.log(resultado);



function verificarPar(numero) {
    if (numero % 2 === 0) {
        return true;
    } else {
        return false;
    }
}
console.log(verificarPar(8)); // true
console.log(verificarPar(5)); // false