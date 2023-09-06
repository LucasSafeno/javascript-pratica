function Cachorro(raca){
    this.raca = raca;
}

Cachorro.prototype.uivar = function(){
    console.log('auuu')
}

let husky = new Cachorro('Husky');

husky.uivar();