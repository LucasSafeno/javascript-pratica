// Fundamentos

/* Variável */

// var variavel = "valor"
var minhaVariavel = "Olá mundo";

console.log(minhaVariavel)

// Variaveis e tipos de dados
var meuNumero = 10; // numero / number
console.log(meuNumero)
console.log(meuNumero + 5)
console.log("10" + 5) //Junta como textos
console.log(typeof meuNumero)

console.log("====================================")

var boleano = true; // true ou false / boolean
console.log(typeof boleano)


var meuObjeto = {}
var meuArray = []
var meuNull = null;
var meuUndefined = undefined;

console.log(typeof meuObjeto);
console.log(typeof meuArray);
console.log(typeof meuNull);
console.log(typeof meuUndefined);


//let e const 
// novas formas de declarar variaveis
let x = 10; // substitui var - valor pode mudar

const y  = 5; // constante
// y = 10 -> Não consegue mudar valor

console.log(typeof x)
console.log(x,y)

console.log("====================================")

// Operadores Aritméticos
console.log(x + y)
console.log(x - y)
console.log(x * y)
console.log(x / y)
console.log("====================================")

// Operadores Comparação
console.log(x == y)