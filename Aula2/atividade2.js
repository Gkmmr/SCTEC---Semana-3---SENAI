let preco = 101; // Definindo o preço original do produto.
let desconto = preco * 0.1; // Calculando 10% de desconto sobre o preço.

function calcularPrecoFinal(preco, desconto) {
    let precoFinal = preco - desconto; // Subtraindo o desconto do preço original.
    return precoFinal; // Retornando o preço final após o desconto.
}

if (preco > 100) {
    let resultado = calcularPrecoFinal(preco, desconto);
    console.log(`O preço final do produto com desconto é: R$ ${resultado}`); // Exibindo o preço final com desconto no console.
} else {
    console.log(`O preço final do produto é: R$ ${preco}`); // Exibindo o preço final sem desconto no console.
}

console.log('Fim do programa.'); // Mensagem indicando o fim do programa.