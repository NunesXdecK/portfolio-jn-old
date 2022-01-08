import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio"
import firebase from "./config";

export default class PessoaColecao implements PessoaRepositorio {

    #conversor = {
        toFirestore(pessoa: Pessoa) {
            return {
                nome: pessoa.nome,
                idade: pessoa.idade
            }
        },
        fromFirestore(snapshot, options): Pessoa {
            const dados = snapshot?.data(options)
            return new Pessoa(dados.nome, dados.idade, snapshot?.id)
        }
    }

    async salvar(pessoa: Pessoa): Promise<Pessoa> { return null }
    async excluir(pessoa: Pessoa): Promise<void> { }
    async obterTodos(): Promise<Pessoa[]> { return null }

    private colecao() {
        return firebase.firestore().collection('pessoas').withConverter(this.#conversor)
    }
}