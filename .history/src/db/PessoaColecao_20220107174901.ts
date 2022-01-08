import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio"
import { Collection, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
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
        return this.colecao().doc
    }
    async obterTodos(): Promise<Pessoa[]> { return null }

    private colecao() {
        const collectionRef = Collection(db, "pessoa");
        const q = query(collectionRef, orderBy("nome", "desc"))
        const querySnapshot = getDocs(q)
        // const unsubscribe = onSnapshot(q, (querySnapshot) => {
        //     console.log(querySnapshot.docs.map)
        // })
        return collectionRef
    }
}