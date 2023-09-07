// Crie uma classe que simule uma conta no banco (Utilize a forma que preferir)
// Deve contar a propriedade saldo
// e os metodos depósito e saque
// teste os metodos

class Conta{
    saldo = null;

    deposito(quantia){
        if(quantia > 0){
            this.saldo += quantia;
        }else{
            return 'Impossível realizar deposito';
        }
    }
    saque(quantia){
        if(quantia < this.saldo){
            this.saldo -= quantia;
        }else{
            return 'Impossível realizar saque';
        }
    }
} // Conta

let conta = new Conta;
conta.saldo = 1000;
console.log('Valor atual : ' + conta.saldo);
conta.deposito(500);
console.log('Valor após deposótio : ' + conta.saldo);
conta.saque(1000);
console.log('Valor após saque : ' + conta.saldo);