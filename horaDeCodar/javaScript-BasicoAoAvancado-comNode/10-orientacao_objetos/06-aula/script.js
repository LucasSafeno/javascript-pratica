function criarCachorro(raca,patas,cor){
    let cachorro = Object.create({})
    cachorro.raca = raca;
    cachorro.patas = patas;
    cachorro.cor = cor;

    return cachorro;

}// criarCachorro

let doberman = criarCachorro('Doberman', 4, 'Preto')

console.log(doberman)