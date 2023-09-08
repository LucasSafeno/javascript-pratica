/** 
 * Crie uma classe conta bancaria
 * Com as propriedades : saldo de conta corrente, saldo de conta poupança e juros da poupança
 * crie métodos de depósito  e saque, também crie um méodo para transferir dinheiro da poupança para corrent
 * além disso, crie uma conta especial que herda  da conta normal;
 * Na conta especial os juros são dobrados da conta normal;
 */

class Conta{
    constructor(saldoCC, saldoCP, juros){
        this.saldoCC = saldoCC;
        this.salcoCP = saldoCP;
        this.juros   = juros;
    }

    deposito(valor){
        this.saldoCC += valor;
    }

    saque(valor){
        this.saldoCC -= valor;
    }

    transferenciaCP(valor){
        this.saldoCC  -= valor;
        this.saldoCP += valor;
    }

    transferenciaCC(valor){
        this.saldoCP  -= valor;
        this.saldoCC += valor;
    }

   jurosDeAversario(){
    let juros = (this.saldoCP * this.juros) / 100
    this.saldoCP += juros;
   }
} // conta

class contaEspecial extends Conta{
    constructor(saldoCC,saldoCP, juros){
        super(saldoCC,saldoCP, juros*2)
    }
}

let conta = new Conta(1000, 500, 1);

console.log(conta);

conta.saque(500);
console.log(conta);

conta.deposito(5000);
console.log(conta);

conta.transferenciaCP(8000);
console.log(conta)

conta.transferenciaCC(5000);
conta.jurosDeAniversario()
console.log(conta);