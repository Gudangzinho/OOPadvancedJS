/* ATIVIDADE 1
Crie uma classe patinete e apresente os atributos e métodos referentes a esta classe, em seguida crie um objeto patinete, defina as instâncias deste objeto e apresente as informações deste objeto no console. */

class Patinete {
    marca: string;
    tipo: string;
    eletrico: boolean;
    valor: number

    mostrarInformacoes() {
        console.log(`Você apaba de adiquirir o Patinete: ${infantil.tipo}, da ${infantil.marca}, no valor de R$ ${infantil.valor},00 `)
    }
    mostrarInformacoes2() {
        console.log(`\n\n e adicionou o: ${eletrico.tipo} da ${eletrico.marca} que custa R$ ${eletrico.valor},00 na sua lista de desejos.`)
    }
}

const infantil = new Patinete()
    infantil.marca = "Hasbro"
    infantil.tipo = "Brinquedo"
    infantil.eletrico = false
    infantil.valor = 160

const eletrico = new Patinete()
    eletrico.marca = "Foston"
    eletrico.tipo = "S09 PRO"
    eletrico.eletrico = true
    eletrico.valor = 2.909

infantil.mostrarInformacoes()
eletrico.mostrarInformacoes2()