// crie dois arrays, um com 5 elementos  e outro com menos
// Faça uma função que verifique o numero de elementos
//  Se possuir menos de 5 elementos, imprima "poucos elementos"
// Se ti mais de 5, muitos elementos


let arr1 = [1,2,3]
let arr2 = [1,2,3,4,5,6,7]

function verificaElementos(arr){
    if(arr.length >= 5){
        console.log('Muitos Elementos')
    }else{
        console.log('Poucos elementos')
    }
}

verificaElementos(arr1)
verificaElementos(arr2)