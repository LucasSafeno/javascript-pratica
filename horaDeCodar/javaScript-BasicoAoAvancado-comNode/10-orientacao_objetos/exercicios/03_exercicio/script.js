/** 
 * Crie um objeto que simula endereço de um cliente
 * Propriedades : Rua, bairro, Cidade e estado
 * No construtor o endereço já deve ser definido por completo
 * Crie métodos para atualizar todas as propriedaddes
 */

class Cliente{
    constructor(rua, bairro, cidade, estado){
        this.rua    = rua;
        this.bairro = bairro;
        this.cidade = cidade;
        this.estado = estado;
    }


    atualizaEndereco(rua, bairro, cidade, estado){
        if(rua){
            this.rua = rua;
        }
        if(bairro){
            this.bairro = bairro;
        }
        if(cidade){
            this.cidade = cidade;
        }
        if(estado){
            this.estado = estado;
        }
    }

}// cliente

let cliente = new Cliente('Rua teste','Bairro teste','Cidade teste', 'PE')

console.log(cliente);

cliente.atualizaEndereco('Rua 06','Recife Antigo', 'Recife', 'Pernambuco')
console.log(cliente)