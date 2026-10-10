const somar = (a , b) => a + b; // Função arrow que soma dois números.

console.log(somar(5, 3)); // Chamando a função e exibindo o resultado no console.

const saudar = () => 'Olá!'; // Função arrow que retorna uma saudação.

console.log(saudar()); // Chamando a função e exibindo o resultado no console.




//function normal

let nota1 = 8;
let nota2 = 7;

function calcularMedia(nota1, nota2) {
   return (nota1 + nota2) / 2;
};

console.log(calcularMedia(nota1, nota2)); // Chamando a função e exibindo o resultado no console.




//agora sim function arrow

const calcularMediaArrow = (nota1, nota2) => (nota1 + nota2) / 2;

console.log(calcularMediaArrow(9, 8)); // Chamando a função e exibindo o resultado no console.