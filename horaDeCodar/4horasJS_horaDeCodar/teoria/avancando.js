// Manipulação de Arrays
const frutas = ["Maçã,", "Laranja"];

frutas.unshift("Acerola"); // adiciona elemento no inicio
console.log("unshit = " +frutas);

frutas.pop(); // remove ultimento elemento
console.log("pop = " + frutas);

// map, filter reduce -> arrow function
console.log("===============================");
const numeros = [1,2,3,4,5,6];


console.log("===== find =====")
// find só retorna o primeiro elemento critico
const numeroPar = numeros.find((num) => num % 2 === 0);
console.log(numeroPar);

console.log("===== filter =====")

// filter retorna todos os elementos que batem
const numerosPares = numeros.filter((num) => num % 2 === 0);
console.log(numerosPares)

console.log("===== MANIPULAÇÃO DE STRING =====");

const frase = "Olá, mundo";

console.log("===== trim =====");
const palavras = frase.trim().split(" ");
console.log(frase)
console.log(palavras)

console.log("===============================");

console.log("===== startsWith =====");
const frase2 = "JavaScript é incrível";
console.log(frase2.startsWith("Java"))

console.log("===== endsWith =====");
console.log(frase2.endsWith("!"))

// Exeções e tratamento de erros

console.log("=====  Exeções e tratamento de erros =====");
const idade  = 19;

// if(idade < 18){
//     throw new  Error("Você deve ter mais de 18 anos");
// }

// try{
//     const idade = 15
//     if(idade < 18){
//         throw new Error("Você deve ser maior de 18 anos")
//     }
// }catch(error){
//     console.log(error.message);
// }
// console.log("Continua programa")

// callback - função a ser executada em outra função

function comprimentar(nome, callback){
    console.log("Olá " + nome);
    callback();
}

function mostrarSaudacao(){
    console.log("Como você está ? ")
}

comprimentar("Lucas", mostrarSaudacao)

comprimentar("Fulano", function(){
    console.log("Tudo bem?")
})

// setTimeout => depois de um tempo executa algo
// function mostrarMensagem(){
//     console.log("Essa mensagem será exibida após 3 segundos");
// }

// setTimeout(mostrarMensagem, 3000)

// setTimeout(function(){
//     console.log("Mensagem apos 2s")
// }, 2000)

// Promisses
// console.log("===== Primises =====");
// const promessa = new Promise((resolve, reject) =>{
//     const condicao = false;

//     if(condicao){
//         resolve("A condição é verdadeira")
//     }else{
//         reject("A condição é falsa")
//     }
// })

// promessa.then((mensagem) =>{
//     console.log(mensagem)
// }).catch((error) =>{
//     console.log(error)
// });

// Bibliotecas feitas que são "promise based"

// const promise1 =  Promise.resolve(3);
// const promise2 = new Promise((resolve,reject) =>{
//     setTimeout(resolve, 2500, "testando");
// });

// Promise.all([promise1, promise2]).then((valores) => {
//     console.log(valores)
// })


//Async await
// console.log("===== Async await =====");

// async function obterValor(){
    
//     const promessa = new Promise((resolve,reject) => {
//       setTimeout(() => resolve("Valor obtido", 2000))
//     });

//     const valor = await promessa;
//     console.log(valor);

//  } //obterValor();

 //obterValor();


//  async function obterValorComErro(){
//     try{
//     const promessa = new Promise((resolve,reject) => {
//         setTimeout(() => reject("Valor com erro", 2000))
//       });
  
//       const valor = await promessa;
//       console.log(valor);
//     }catch(error){
//         console.log(error)
//      }
//  }

 //obterValorComErro()

// JSON
// {nome: "valor"} => {"nome": "valor"}
// padronização de comunicação
// front end e back end em uma linguagem só

console.log("===== JSON =====");

const objeto = {nome: "lucas", idade: 29}

const jsonString = JSON.stringify(objeto);

console.log(typeof jsonString)


const json = '{"nome": "lucas", "idade": 29}';

    // conversão json para objeto
    const objeto2 = JSON.parse(json);

    console.log(objeto2);


