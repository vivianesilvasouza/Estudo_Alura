import { cliente } from "./Cliente.js";
import { contaCorreten } from "./ContaCorrente.js";

const cliente1 = new cliente();
cliente1.nome = 'Viviane';
cliente1.cpf = 1111222333;

const cliente2 = new cliente();
cliente2.nome = 'Felipe';
cliente2.cpf = 1111222444;


const contaCorrenteViviane = new contaCorreten()
contaCorrenteViviane.agencia = 1001
contaCorrenteViviane.cliente = cliente1
contaCorrenteViviane.depositar(500)

const conta2 = new contaCorreten()
conta2.cliente = cliente1
conta2.agencia = 102


let valor = 200;
conta2.transferir(200, conta2);

console.log(conta2.cliente);




