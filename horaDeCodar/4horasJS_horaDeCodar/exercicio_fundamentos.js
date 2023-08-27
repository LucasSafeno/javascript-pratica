// Exercucio 1: Olá, Mundo.
// Cria script que imprima "Olá mundo";
    console.log('Olá Mundo');

// Exercucio 2: Conversão de tipos
// Dado um valor de uma string "1234"; converta-o em um número e imprima na tela

const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber);
console.log(valorNumber);

// Exercucio 3: Manipulação de string
// Dado uma string "Javascript é incrivél", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase

const minhaString = "JavaScript é incrível";
const numeroDeCaracteres = minhaString.length;
const  numeroPalavras = minhaString.split(" ").length

console.log(`O número de caracteres é ${numeroDeCaracteres}`);
console.log(`O número de palavras é ${numeroPalavras}`);

// Exercucio 4: Loops
// Crie um array com cinco nomes. Use um loop for para imprimir os nomes
let nomes = ['Lucas','Eysis','Thauanna', 'José', 'Maria'];

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i]);
}

