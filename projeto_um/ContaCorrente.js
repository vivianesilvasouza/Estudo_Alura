export class contaCorreten {
    agencia;
    saldo;

    sacar(valor) {
        if (this.saldo >= valor) {
            this.saldo -= valor
            return valor
        }
    }

    depositar(valor) {
        if (valor > 0) {
            this.saldo += valor
        }
    }
}