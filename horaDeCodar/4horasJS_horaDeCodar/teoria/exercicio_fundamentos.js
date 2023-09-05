// Exercucio 1: Olá, Mundo.
// Cria script que imprima "Olá mundo";
    console.log('Olá Mundo');

// Exercucio 2: Conversão de tipos
// Dado um valor de uma string "1234"; converta-o em um número e imprima na tela

const valorString = "1234";
const valorNumber = Number(valorString);
console.log(typeof valorNumber);
console.log(valorNumber);

// Exercucio 3: Manipulação de string
// Dado uma string "Javascript é incrivél", escreva um código que conte quantos caracteres a string tem e quantas palavras existem na frase

const minhaString = "JavaScript é incrível";
const numeroDeCaracteres = minhaString.length;
const  numeroPalavras = minhaString.split(" ").length

console.log(`O número de caracteres é ${numeroDeCaracteres}`);
console.log(`O número de palavras é ${numeroPalavras}`);

// Exercucio 4: Loops
// Crie um array com cinco nomes. Use um loop for para imprimir os nomes
let nomes = ['Lucas','Eysis','Thauanna', 'José', 'Maria'];

for(let i = 0; i <= nomes.length; i++){
    console.log(nomes[i]);
}


// Exercucio 5: Funções, string e Math
// Crie uma função que aceita uma string representando um horario no formato de 24 horas(exemplo 14:30). A função deve retornar uma retornar no formato de 12 horas (exemplo 2:30 PM).
// use o objeto Math para auxiliar nessa conversão. Certifique-se de que a função lida corretamente com horários


function conversaoHorario(horario24){
    // 14:20 => hora 14, minuto 20 split(":")
    // const hora = horario24.split(':')[0]
    // const minuto = horario24.split(':')[1]

    const [hora, minuto] = horario24.split(":");

    const hora12 = hora  % 12 || 12;

    let periodo  = "AM"

    if(hora > 12){
        periodo = "PM";
    }

    console.log(`${hora12}:${minuto} ${periodo}`);
}

conversaoHorario("12:54");

conversaoHorario("16:54");

conversaoHorario("8:54");
