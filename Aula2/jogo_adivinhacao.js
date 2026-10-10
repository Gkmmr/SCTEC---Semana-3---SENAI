const prompt = require('prompt-sync')();

const aleatorio = Math.floor(Math.random() * 10);
let contador = 1;
let alvo = aleatorio;
let palpite = Number(prompt('Adivinhe o número (entre 0 e 9): '));

function verificarPalpite (palpite, alvo, contador) {
    if (palpite === alvo) {
        return `Parabéns! Você acertou em ${contador} tentativas.`;
    } else if (palpite > alvo) {
        return 'É menor!';
    } 
    return 'É maior!';   
}

//console.log(aleatorio);

while (palpite !== alvo) {
    contador++;
    console.log(verificarPalpite(palpite, alvo, contador));
    palpite = Number(prompt('Tente novamente! Adivinhe o número (entre 0 e 9): '));
}

console.log(verificarPalpite(palpite, alvo, contador));