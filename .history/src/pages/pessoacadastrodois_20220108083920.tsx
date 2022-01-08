import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio";
import PessoaColecao from "../db/PessoaColecao";

export default function Home() {

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

  function pessoaNova() {
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

  return (
    <Layout titulo="Pessoas Mudando Pagina Unica">
      {visivel === "tabela" ? (
        <>
          <Botao onClick={pessoaNova} cor="cinza">Nova pessoa</Botao>
          <Tabela
            pessoas={pessoas}
            verId={true}
            paginaUnica={true}
            pessoaSelecionado={pessoaSelecionado}
            pessoaExcluido={pessoaExcluido} />
        </>
      ) : (
        <FormularioPessoa
          pessoaAlterou={salvarPessoa}
          pessoaNova={pessoaNova}
          paginaUnica={true}
          paginaUnicaFuncao={() => setVisivel("tabela")} pessoa={pessoa} />
      )}

    </Layout>
  )
}