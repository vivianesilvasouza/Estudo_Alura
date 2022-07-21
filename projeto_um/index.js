import { cliente } from "./Cliente.js";
import { contaCorreten } from "./ContaCorrente.js";

const cliente1 = new cliente();
cliente1.nome = 'Viviane';
cliente1.cpf = 1111222333;

const cliente2 = new cliente();
cliente2.nome = 'Felipe';
cliente2.cpf = 1111222444;


const contaCorrenteViviane = new contaCorreten()
contaCorrenteViviane.saldo = 0
contaCorrenteViviane.agencia = 1001

console.log(contaCorrenteViviane.saldo)
contaCorrenteViviane.depositar(100)
contaCorrenteViviane.depositar(200)
contaCorrenteViviane.depositar(-1)
console.log(contaCorrenteViviane.saldo)

const valorSacado = contaCorrenteViviane.sacar(50)
console.log(valorSacado)

console.log(contaCorrenteViviane)


