export class contaCorreten {
    agencia;
    __saldo = 0;
    cliente;

    sacar(valor) {
        if (this._saldo >= valor) {
            this._saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this._saldo += valor
        }
    }

    transferir(valor, conta) {
        const valorSacado = this.sacar(valor)
        conta.depositar(valorSacado)
    }
}