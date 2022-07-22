import { cliente } from "./Cliente.js";
import { contaCorreten } from "./ContaCorrente.js";

const cliente1 = new cliente('Viviane', 1111222333);

const cliente2 = new cliente('Felipe', 1111222444);

const contaCorrenteViviane = new contaCorreten(1001, cliente1)
contaCorrenteViviane.depositar(500)

const conta2 = new contaCorreten(cliente2, 102)

let valor = 200;
conta2.transferir(200, conta2);

console.log(cliente2.cpf);




