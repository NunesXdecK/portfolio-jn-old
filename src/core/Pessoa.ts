export default class Pessoa {
    #id: string
    #nome: string
    #idade: number

    static vazio() {
        return new Pessoa("", 0)
    }
    
    static pessoas() {
        const pessoas = [
            new Pessoa("Natasha", 30, "1"),
            new Pessoa("Melissa", 4, "12"),
            new Pessoa("Auxiliadora", 58, "44"),
            new Pessoa("Júnior", 34, "433")
        ]
        return pessoas
    }

    constructor(nome: string, idade: number, id: string = null) {
        this.#nome = nome
        this.#idade = idade
        this.#id = id
    }

    get id() {
        return this.#id
    }

    get nome() {
        return this.#nome
    }

    get idade() {
        return this.#idade
    }
}