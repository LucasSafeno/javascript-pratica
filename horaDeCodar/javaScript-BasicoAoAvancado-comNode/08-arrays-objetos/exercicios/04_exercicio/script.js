// Adicione a propriedade janela no onibus com valor de 20
// Delete a propriedade rodas
// imprima a propriedade janelas no console

let onibus ={
    rodas: 8,
    limitePassageiros: 40,
    portas: 2
}

onibus.janelas = 20

delete onibus.rodas

console.log(onibus.janelas)