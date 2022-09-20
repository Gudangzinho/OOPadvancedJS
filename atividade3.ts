/*
ATIVIDADE 3
Crie uma classe paciente e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto paciente, defina as instâncias deste objeto e apresente as informações deste objeto no console.
*/
 
 class Paciente {
    nome: string;
    idade: number;
    status: string;

    resultado() {
        console.log(`O paciente ${idoso.nome} de ${idoso.idade} anos. \nacaba de mudar o seu status para "${idoso.status}" `)
    }
 }

var idoso = new Paciente();
    idoso.nome = "Jerson";
    idoso.idade = 67;
    idoso.status = "Alta"

idoso.resultado()