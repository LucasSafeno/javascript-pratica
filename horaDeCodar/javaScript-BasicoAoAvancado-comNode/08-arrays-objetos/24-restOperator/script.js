// Uma forma da função receber indefinidos parametros
// O operador test vai virar um array
// o parametro é definido por : ...nome

let num =  1;
let num1 = 5;
let num2 = 3;
let num3 = 4;


function imprimirNumeros(...args){
    for(let i = 0; i< args.length; i++){
        console.log(args[i])
    }
}

imprimirNumeros(num,num1,num2)
console.log('pausa')
imprimirNumeros(num2,num3)
console.log('pausa')
imprimirNumeros(1,2,3,4,5,6,7,8,9,0,88,8,1,11)