// Não se pode colocar propriedades a classe. Apenas por prototype

class Cachorro{
    constructor(raca,patas,cor){
        this.raca = raca;
        this.cor = cor
    }
}

Cachorro.prototype.patas = 4;

let labrador = new Cachorro('Labrador','Caramelo');

console.log(labrador.raca);
console.log(labrador.patas)