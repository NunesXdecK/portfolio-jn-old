import Pessoa from "../core/Pessoa";
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
import { db } from "./firebaseDB";

export default class PessoaColecao {

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

    async salvar(pessoa: Pessoa) {
        if (pessoa?.id) {
            const docRef = await doc(this.colecao(), pessoa.id)
            await updateDoc(docRef, this.#conversor.toFirestore(pessoa))
        } else {
            const docRef = await doc(this.colecao())
            await setDoc(docRef, this.#conversor.toFirestore(pessoa))
        }
    }
    
    async excluir(pessoa: Pessoa) {
        const docRef = await doc(this.colecao(), pessoa.id)
        await deleteDoc(docRef)
    }

    async obterTodos() {
        const q = query(this.colecao(), orderBy("nome", "asc"))
        const promise = await getDocs(q)
        let pessoas = []
        promise.docs.map(doc => {
            pessoas.push(doc.data())
        })
        return pessoas
    }

    private colecao() {
        const collectionRef = collection(db, "pessoa").withConverter(this.#conversor);
        return collectionRef
    }
}