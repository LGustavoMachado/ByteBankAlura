export class Cliente {
    nome;
    _cpf;

    get cpf(){
        return this._cpf;
    }

    constructor(nome, cpf){ //passando os parametros direto na instancia cliente
        this.nome = nome;
        this._cpf = cpf;
    }
}