// Fundamentos

/* Variável */

// var variavel = "valor"
var minhaVariavel = "Olá mundo";

console.log(minhaVariavel);

// Variaveis e tipos de dados
var meuNumero = 10; // numero / number
console.log(meuNumero);
console.log(meuNumero + 5)
console.log("10" + 5); //Junta como textos
console.log(typeof meuNumero);

console.log("====================================")

var boleano = true; // true ou false / boolean
console.log(typeof boleano);


var meuObjeto = {};
var meuArray = [];
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

console.log(typeof x);
console.log(x,y);

console.log("====================================")

// Operadores Aritméticos
console.log(x + y);
console.log(x - y);
console.log(x * y);
console.log(x / y);
console.log("====================================")

// Operadores Comparação
console.log(x == y) // igual
console.log(x != y) // diferente
console.log("====================================")

console.log("5" == 5);
console.log("5" === 5);
console.log("5" !== 5);

console.log("===================OPERADORES LÓGICOS=================")
// AND &&
// OR ||
console.log(10 >  5  && 20 > 6);
console.log(10 >  5  && 20 < 6);

console.log(10 > 5 || 20 > 5);
console.log(10 > 5 || 20 < 5);

console.log("===================CONVERSÃO DE TIPOS=================")
const meuNumero2 = "123";

const meuNumeroConvertido = Number(meuNumero);
console.log(meuNumeroConvertido);
console.log(typeof meuNumeroConvertido);

console.log("=============ESTRUTURA DE CONDIÇÃO=========")
// IF- ELSE- ELSE IF

/*
    if(true){
        execute
    }else if(true){
        execute
    }else{
        executa
    }
*/
const idade = 18;

if(idade < 13){
    console.log("CRIANÇA")
}else{
    console.log("ADULTO");
}

console.log("=============SWITCH=========");
const fruta  = 'Maçã';

switch(fruta){
    case 'Banana':
        console.log('Banana é a fruta');
        break;
    case 'Maçã':
        console.log('Maçã é a fruta');
        break;
    default:
        console.log('Nenhuma fruta !'); // caso nenum case retorne true
}

console.log("=============ESTRUTURA DE REPETIÇÃO=========");


console.log("=== FOR ===");
// contador, condição de limite, incremento
    for(let i = 0; i < 5; i++){
        // concatenação
            console.log("I é igual " + i)
    }

console.log("=== WHILE ===");
// Enquanto...
let k = 0;
while(k < 5){
    console.log('I é igual ' + k);
    k++;
}

console.log("=== DO WHILE ===");
let j = 0;
do{
    console.log('O valor de J é : ' + j);
    j++
}while(j < 5)

console.log('=======================');
console.log("=== FUNÇÕES ===");
//  function nome(arg){ corpo }

function comprimentar(){
    console.log('Olá!');
}

comprimentar();


// Escopo variaveis
let cor = 'Azul';

function mostrarCor(){
    let cor = 'Verde';

    console.log(cor);
}
mostrarCor();
console.log(cor);


