// Crie um JSON com 3 propriedades
// Atribua ela a uma variavel
// Acesse a propriedade imprmindo no console

let pessoa = {
    "nome": "Lucas",
    "sobrenome": "Tenório",
    "idade": 29
}

console.log(pessoa.nome)
console.log(pessoa.sobrenome)
console.log(pessoa.idade)

// Crie um array a partir de uma frase
// Imprima cada palavra do array no console por meio de um for


console.log("===== EXERCICIO 9 ========")
let arr = "Aprendendo javascript com curso hora de codar";
let arrFrase = arr.split(" ")

for(let i = 0; i <= arrFrase.length; i++){
    console.log(arrFrase[i]);
}