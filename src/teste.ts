export default class Teste {
    nome: string
    idade: number
    constructor(nome: string, idade: number) {
        this.nome = nome
        this.idade = idade
    }

    contagem(num1: number, num2: number): number {
        console.log(this.nome, this.idade)
        return num1 + num2
    }
}
