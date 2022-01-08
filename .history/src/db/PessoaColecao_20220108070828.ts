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
        const docRef = await doc(this.colecao())
        if (pessoa?.id) {
            const promise = await updateDoc(docRef, {
                "id": pessoa.id
            })
            console.log(promise)
        } else {
            const promise = await setDoc(docRef, this.#conversor.toFirestore(pessoa))
            console.log(promise)
        }
        return
    }
    
    async excluir(pessoa: Pessoa) {
        const docRef = await doc(this.colecao(), "pessoa/" + pessoa.id)
        const promise = await deleteDoc(docRef)
        console.log(promise)
        return 
    }

    async obterTodos() {
        const q = query(this.colecao(), orderBy("nome", "desc"))
        const promise = await getDocs(q)
        let pessoas = []
        promise.docs.map(doc => {
            pessoas.push(doc.data())
            console.log(doc.data())
        })
        console.log(promise)
        return 
    }

    private colecao() {
        const collectionRef = collection(db, "pessoa").withConverter(this.#conversor);
        return collectionRef
    }
}