// let e const
function testarVar(){
    var x = 1;
    if(true){
        var x = 2;
        console.log(x)
    }
}

function testarLet(){
    let x = 1;
    if(true){
        let x = 1;
        console.log(x)
    }
}

testarVar()
testarLet()

// arrow function

const soma = (a,b) => a + b;

console.log(soma(1,1));

const quadrado = (numero) => numero * numero;

console.log(quadrado(4))

const cumprimento = (nome) =>{
    const mensagem = `olá ${nome}`
    return mensagem
}

console.log(cumprimento('Lucas'));

// template literals
const nome = 'Lucas'
const idade = 29

console.log(`Olá ${nome}, eu tenho ${idade} anos` );

// Destructing -> desestrução
const  pessoa = {nome: 'Lucas', idade: 40}

const {nome: nome2, idade: idade2} = pessoa;

console.log(nome2);

// spread operator => espelhamento
const array1 = [1,2,3]
const array2 = [...array1,4,5,6]

const soma2 = (...args) => args.reduce((total, numero) => total + numero, 0);

console.log(soma2(1,2,3,4,5,6,7));

// default parameters
function saudacao(nome = 'Lucas'){
    console.log(`Olá, ${nome}`);
}

saudacao('Teste')

// object literals
// {nome: "Lucas"}

const nomeNovo = "Tenório"
const idadeNova = 29

const pessoaNova= {nome: nomeNovo, idade: idadeNova}

console.log(pessoaNova);

const saudacaoObject = {
    dizerOi(){
        console.log('oi')
    }
}

saudacaoObject.dizerOi()

// classe e herennça
class Pessoa{
    constructor(nome, idade){
        this.nome = nome
        this.idade = idade
    }
    falar(){
        console.log(`Oi pessoal, meu nome é ${this.nome}`)
    }
    
}

const ze = new Pessoa('ze', 12)

console.log(ze)

ze.falar();

class Funcionario extends Pessoa{
    constructor(nome, idade,salario){
        super(nome, idade)
        this.salario = salario
    }
}

const mario = new Funcionario("Mario", 44, 1200)

console.log(mario)
