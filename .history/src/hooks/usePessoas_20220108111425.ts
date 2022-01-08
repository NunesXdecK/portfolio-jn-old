import { useEffect, useState } from "react"
import Pessoa from "../core/Pessoa"
import PessoaColecao from "../db/PessoaColecao"
import useTabelaForm from "./useTabelaForm"

export default function usePessoas() {
    const repo = new PessoaColecao()

    const { tabelaVisivel, exibirTabela, exibirFormulario } = useTabelaForm()

    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
    const [pessoas, setPessoas] = useState<Pessoa[]>([])

    useEffect(() => {
        obterPessoas()
    }, [])

    function obterPessoas() {
        repo.obterTodos().then(setPessoas)
        exibirTabela()
    }
    
    function obterPessoa(id: string): Pessoa {
        return repo.obterPessoa(id)
    }

    function novaPessoa() {
        setPessoa(Pessoa.vazio())
        exibirFormulario()
    }

    function salvarPessoa(pessoa: Pessoa) {
        let r = repo.salvar(pessoa)
        if (r) {
            obterPessoas()
        }
    }

    function selecionarPessoa(pessoa: Pessoa) {
        setPessoa(pessoa)
        exibirFormulario()
    }

    function exlcuirPessoa(pessoa: Pessoa) {
        let r = repo.excluir(pessoa)
        if (r) {
            obterPessoas()
        }
    }

    return {
        tabelaVisivel,
        pessoa,
        pessoas,
        obterPessoas,
        obterPessoa,
        salvarPessoa,
        novaPessoa,
        selecionarPessoa, 
        exlcuirPessoa
    }
}