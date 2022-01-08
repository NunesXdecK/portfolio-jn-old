import { useEffect, useState } from "react"
import Pessoa from "../core/Pessoa"
import PessoaColecao from "../db/PessoaColecao"

export default function usePessoas() {
    const repo = new PessoaColecao()

    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
    const [pessoas, setPessoas] = useState<Pessoa[]>([])
    const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")

    useEffect(() => {
        obterTodos()
    }, [])

    function obterTodos() {
        repo.obterTodos().then(setPessoas)
        setVisivel("tabela")
    }

    function novaPessoa() {
        setPessoa(Pessoa.vazio)
        setVisivel("formulario")
    }

    function salvarPessoa(pessoa: Pessoa) {
        let r = repo.salvar(pessoa)
        if (r) {
            obterTodos()
        }
    }

    function pessoaSelecionado(pessoa: Pessoa) {
        setVisivel("formulario")
        setPessoa(pessoa)
    }

    function pessoaExcluido(pessoa: Pessoa) {
        let r = repo.excluir(pessoa)
        if (r) {
            obterTodos()
        }
    }

    return {
        salvarPessoa,
        novaPessoa
    }
}