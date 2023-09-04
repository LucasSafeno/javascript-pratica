let pessoa = {
    "nome": "Lucas",
    "idade": 29,
    "profissao": "Programador",
    "hobbie": ["Vidao Game", "Leitura"]
}

let pessoaTexto = JSON.stringify(pessoa);

//console.log(pessoaTexto)

let pessoaJSON = JSON.parse(pessoaTexto)

console.log(pessoaJSON)