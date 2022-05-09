import { Cliente } from "./cliente.js"; //NÃO ESQUECER DE BOTAR  .JS
export class ContaCorrente{
    static numeroDeContas = 0;
    _cliente;
    agencia;

    _saldo =0;

    get saldo(){
        return this._saldo;
    }
    
    set cliente(novoValor){
        if(novoValor instanceof Cliente){ //Só aceita o valor se for uma instancia
            this._cliente = novoValor;
        }
       
    }
    get cliente(){
        return this._cliente;
    }


    constructor(cliente, agencia){
        this.agencia = agencia;
        this._cliente = cliente;
        ContaCorrente.numeroDeContas += 1;  //estou acessando um atributo estático da classe
    }
    


    sacar(valor){
        if(this._saldo >= valor){ //Está recebendo valor como parametro e fazer a conta
            this._saldo -= valor;
            return valor; // ver isso depois
        }
    }

    depositar(valor){
        if(valor <= 0){
            return; // para de executar essa função.
        }
        this._saldo += valor;
    }

    transferir(valor, conta){
        const valorSacado = this.sacar(valor);
        conta.depositar(valorSacado);
    }

}