import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio"
import { collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
import { db } from "./firebaseDB";

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
    async excluir(pessoa: Pessoa): Promise<void> {
        return (await this.colecao())
    }
    async obterTodos(): Promise<Pessoa[]> { return null }

    private colecao() {
        const collectionRef = collection(db, "pessoa");
        const q = query(collectionRef, orderBy("nome", "desc"))
        const querySnapshot = getDocs(q)
        return querySnapshot
    }
}