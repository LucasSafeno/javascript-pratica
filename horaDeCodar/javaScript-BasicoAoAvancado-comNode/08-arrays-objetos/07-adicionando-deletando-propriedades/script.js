let pessoa = {
    nome: "Lucas",
    idade: 29,
    profissao: "Programador"
}

console.log(pessoa.nome)

delete pessoa.nome

console.log(pessoa.nome)

console.log(pessoa);

pessoa.casado = true;

console.log(pessoa.casado)