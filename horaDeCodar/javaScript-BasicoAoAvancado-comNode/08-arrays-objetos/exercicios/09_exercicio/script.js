// calculadora

const calculadora = {
    soma: function(a,b){
        return a + b;
    },
    subtracao: function (a,b) {
        return a - b;
    },
    multiplicao: function(a,b) {
        return a * b;
    },
    divisao: function(a,b) {
        return a / b;
    }
}

console.log(calculadora.soma(10,10))
console.log(calculadora.subtracao(10,5))
console.log(calculadora.multiplicao(2,10))
console.log(calculadora.divisao(10,10))