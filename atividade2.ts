/*]
    ATIVIDADE 2
Crie uma classe conta bancária e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto conta bancária, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/

class Conta {
    nome: string;
    data: string;
    numeroConta: number;

    constructor(nome: string, data: string, numeroConta: number) {
        this.nome = nome;
        this.data = data;
        this.numeroConta = numeroConta;
    }

    dadosConta(): any {
        console.log("Cliente: " + this.nome + "\ncadastrado no dia: " + this.data + "de 2022." + "\n\n numero da conta: " + this.numeroConta)
    }
}

let aff: Conta = new Conta("Igor Nascimento", "19/09", 111111111);
    aff.dadosConta()