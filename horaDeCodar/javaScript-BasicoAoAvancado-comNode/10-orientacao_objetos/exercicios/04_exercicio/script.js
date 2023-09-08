/** 
 * Crie uma classe que simule um carro
 * Propriedades : marca,cor,gasolina restante
 * Crie um método de dirigir o carro, que vá diminuindo a gasolina gradativamente
 * E um de abastecer para aumentar a gasolina
 */
class Carro{
    constructor(marca,cor,gasolina){
        this.marca      =   marca;
        this.cor        =   cor;
        this.gasolina   =   gasolina;
    }

    dirigir(){
        let gasolinaPerdida = 0.5;
        this.gasolina -= gasolinaPerdida;
        console.log('Você perdeu ' + gasolinaPerdida + ', resta apenas : ' + this.gasolina)
    }
    abastecer(gasolina){
        this.gasolina += gasolina;
        console.log('Você abasteceu : ' + gasolina + ', agora você tem ' + this.gasolina);
    }

}// carro

let carro = new Carro('Gol', 'Branco', '100');
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()
carro.dirigir()

carro.abastecer(200)
