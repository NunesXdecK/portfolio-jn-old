import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio"
import { collection, deleteDoc, doc, getDocs, onSnapshot, orderBy, query } from "firebase/firestore";
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

    funcion 

    async salvar(pessoa: Pessoa): Promise<Pessoa> { return null }

    async excluir(pessoa: Pessoa): Promise<void> {
        return deleteDoc(doc(this.colecao(), "pessoa/" + pessoa.id))
    }

    async obterTodos(): Promise<Pessoa[]> { return null 
    
        const q = query(this.colecao(), orderBy("nome", "desc"))
        const querySnapshot = getDocs(q)
    }

    private colecao() {
        const collectionRef = collection(db, "pessoa");
        return collectionRef
    }
}