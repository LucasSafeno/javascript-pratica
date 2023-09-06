// Server para criar propriedades "Constantes", que não podem ser alteradas na classe

class Cachorro{
    constructor(raca, cor){
        this.raca = raca;
        this.cor = cor
    }
    latir(){
        console.log('au au')
    }
}
let patas = Symbol()
Cachorro.prototype[patas] = 4

Cachorro.prototype.raca = 'SRC'


let labrador = new Cachorro('Labrador', 'Caramelo');

// Só poderá acessar patas pelo prototype
console.log(Cachorro.prototype[patas]);
console.log(labrador[patas])

