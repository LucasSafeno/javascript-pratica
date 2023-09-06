let cachorro = {
    raca: 'SRC'
}

let pastorAlemao = Object.create(cachorro);

pastorAlemao.raca = 'Pastor Alemão';

console.log(pastorAlemao.raca);