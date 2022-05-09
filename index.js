import { Cliente } from "./cliente.js";
import { ContaCorrente } from "./ContaCorrente.js";


const cliente1 = new Cliente("Ricardo", 11122233344456);
const cliente2 = new Cliente("Luiz", 8823344493);
const cliente3 = new Cliente("Alice", 333451234454);

const conta1 = new ContaCorrente(cliente1, 1001);
const conta2 = new ContaCorrente(cliente2, 1001);
const conta3 = new ContaCorrente(cliente3, 1001);

conta1.depositar(500);
conta1.transferir(200, conta2)

console.log(conta1);
console.log(conta2);
console.log(conta3);

console.log(ContaCorrente.numeroDeContas); // Estou chamando a variavel estática da Conta Corrente.












//PRIMEIRA FORMA DE DECLARAR CONTAS CORRENTES E CLIENTES
// const contaCorrenteRicardo = new ContaCorrente();
// contaCorrenteRicardo.agencia = 1001;
// contaCorrenteRicardo.cliente = cliente1; // estou enviando esse cliente para a conta corrente.

// const conta2 = new ContaCorrente(); //instanciei conta corrente como conta2
// conta2.agencia = 1001;
// conta2.cliente = cliente2;

// const conta3 = new ContaCorrente();
// conta3.agencia = 1001;
// conta3.cliente = cliente3; // estou enviando o cliente 3 para a classe de conta corrente "cliente"




//FORMA DE DECLARAR O CLIENTE NA CONTA CORRENTE
//const conta2 = new ContaCorrente(); //instanciei conta corrente como conta2
//conta2.cliente = new Cliente(); // depois instanci conta2.cliente como Cliente -> tendo acesso a class
//conta2.cliente.nome = "Luiz";
//conta2.cliente.cpf = 11122233344456;
//conta2.agencia = 1001;
