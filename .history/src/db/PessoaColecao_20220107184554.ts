import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio"
import { collection, deleteDoc, doc, getDocs, orderBy, query, setDoc, updateDoc } from "firebase/firestore";
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

    async salvar(pessoa: Pessoa): Promise<Pessoa> {
        const docRef = await doc(this.colecao())
        if (pessoa?.id) {
            const promise = await updateDoc(docRef, {
                "done": true
            })
            console.log(promise)
        } else {
            const promise = await setDoc(docRef, this.#conversor.toFirestore(pessoa))
            console.log(promise)
        }
        return
    }
    
    async excluir(pessoa: Pessoa): Promise<void> {
        const docRef = await doc(this.colecao(), "pessoa/" + pessoa.id)
        const promise = await deleteDoc(docRef)
        console.log(promise)
        return 
    }

    async obterTodos(): Promise<Pessoa[]> {
        const q = query(this.colecao(), orderBy("nome", "desc"))
        const promise = await getDocs(q)
        let pessoas
        promise.docs.map(doc => {
            console.log(doc.data())
        })
        console.log(promise)
        return null
    }

    private colecao() {
        const collectionRef = collection(db, "pessoa").converter(this.#conversor);
        return collectionRef
    }
}