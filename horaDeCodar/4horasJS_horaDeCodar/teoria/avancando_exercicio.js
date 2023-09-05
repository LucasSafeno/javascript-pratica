// Exercicio manipulação de Array

// Crie uma lista de compras que inicialmente é vazia
// adicione 5 itens a lista usando o push()
// Agora remova o primeiro item da lista usando o shift()
// Imprima a lista no console.

const listaDecompras = [];

listaDecompras.push('Leite','Ovos','Pão','Manteiga','Queijo');

listaDecompras.shift();

console.log(listaDecompras)

// Exercicio manipulação de array - find()

// Você tem um array de numeors: 3,7,14,21,29,36,42
// use a função find() para encontrar o primeiro numero é divisivel por 7 
// e maior que 10

const numeros = [3,7,14,21,29,36,42]

const numero = numeros.find((num) => num > 7 && num % 7 === 0);
console.log(numero);


// Exercicio manipulação de array - filter()

// dado o arry de numeros [5,10, 15, 20, 25, 30, 35, 40]
//  use a função filter para criar um novo array que contenha apenas os numeros que são maiores que 20

const numeros2 =  [5,10, 15, 20, 25, 30, 35, 40];
const filtrados = numeros2.filter((num) => num <= 20)
console.log(filtrados);

// Exercicio manipulação de String - splie() e trim();

// Dado a String " Bom dia, mundo! "
// remova os espaços em branco do inicio e no final da string
// em seguinda, divida a string em palavras

const frase = " Bom dia, mundo! "
const  palavras = frase.trim().split(" ")
console.log(palavras)


// Exercicio manipulação de String - startWith() e endWith()

// Dado a string : O rato roeu a roupa do rei de Roma
// verifique  se a string com a palavra "O" e termina com a palavra "Roma"
const frase2 = "O rato roeu e roupa do rei de Roma"
const comecaCom = frase2.startsWith("O")
const terminaCom = frase2.endsWith("Roma")

console.log(comecaCom)
console.log(terminaCom)