const prompt = require('prompt-sync')(); // Importando o módulo 'prompt-sync' para permitir a entrada de dados pelo usuário no terminal.

function saudacao(nome = 'Visitante') {
    
    console.log(`Olá ${nome}!`);
}

let nome = prompt('Qual o seu nome? ');
saudacao(nome); // Chamando a função com o argumento fornecido pelo usuário.
saudacao(); // Chamando a função sem argumentos, então o valor padrão será usado, nesse caso "Visitante".


function criarPerfil (nome, sobrenome, cpf, email, cidade = 'Não informado') {

    console.log(prompt('Digite seu nome: '));
    console.log(prompt('Digite seu sobrenome: '));
    console.log(prompt('Digite seu CPF: '));
    console.log(prompt('Digite seu email: '));
    console.log(prompt('Digite sua cidade: '));
    
}

criarPerfil(); // Chamando a função sem argumentos, então o valor padrão será usado, nesse caso "Não informado".

function criarPerfil2 (nome, sobrenome, cpf, email, cidade = 'Não informado') {

    console.log(`Nome: ${nome}`);
    console.log(`Sobrenome: ${sobrenome}`);
    console.log(`CPF: ${cpf}`);
    console.log(`Email: ${email}`);
    console.log(`Cidade: ${cidade}`);
}

criarPerfil2('João', 'Silva', '123.456.789-00', 'joao.silva@email.com', 'São Paulo');
criarPerfil2('João', 'Silva', '123.456.789-00', 'joao.silva@email.com');
