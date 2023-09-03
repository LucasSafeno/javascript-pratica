let pessoa = {
    nome: "Lucas"
}

let pessoa2 = pessoa

let pessoa3 = {
    nome: 'Maria'
}
console.log(pessoa2 == pessoa )
console.log(pessoa == pessoa3)
console.log(pessoa2 == pessoa3)

pessoa2.nome = 'Zé' // ao manipular um obj que foi herdado, modifica os dois

console.log(pessoa.nome)