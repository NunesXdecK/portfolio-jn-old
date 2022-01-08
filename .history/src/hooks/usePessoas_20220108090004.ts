import { useEffect, useState } from "react"
import Pessoa from "../core/Pessoa"
import PessoaColecao from "../db/PessoaColecao"

export default function usePessoas() {
    const repo = new PessoaColecao()

    const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
    const [pessoas, setPessoas] = useState<Pessoa[]>([])
    const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")

    useEffect(() => {
        obterPessoas()
    }, [])

    function obterPessoas() {
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
            obterPessoas()
        }
    }

    function selecionarPessoa(pessoa: Pessoa) {
        setVisivel("formulario")
        setPessoa(pessoa)
    }

    function exlcuirPessoa(pessoa: Pessoa) {
        let r = repo.excluir(pessoa)
        if (r) {
            obterPessoas()
        }
    }

    return {
        pessoa,
        pessoas,
        visivel,
        obterPessoas,
        salvarPessoa,
        novaPessoa,
        selecionarPessoa, 
        exlcuirPessoa
    }
}