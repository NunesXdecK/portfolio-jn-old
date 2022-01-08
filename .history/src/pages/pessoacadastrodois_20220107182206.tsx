import { useState } from "react";
import Botao from "../components/Botao";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio";
import PessoaColecao from "../db/PessoaColecao";

export default function Home() {

  const repo: PessoaRepositorio = new PessoaColecao()

  const [pessoa, setPessoa] = useState<Pessoa>(Pessoa.vazio())
  const [pessoas[], setPessoas] = useState<Pessoa[]>([])
  // let pessoas = Pessoa.pessoas()
  // let pessoa = Pessoa.vazio()
  const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")

  function pessoaNova() {
    setPessoa(Pessoa.vazio)
    setVisivel("formulario")
  }

  function salvarCliente(pessoa: Pessoa) {
    setVisivel("tabela")
    // pessoas.push(pessoa)
  }

  function pessoaSelecionado(pessoa: Pessoa) {
    setPessoa(pessoa)
    setVisivel("formulario")
  }

  function pessoaExcluido(pessoa: Pessoa) {
    console.log(pessoa.nome)
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
          pessoaAlterou={salvarCliente}
          paginaUnica={true}
          paginaUnicaFuncao={() => setVisivel("tabela")} pessoa={pessoa} />
      )}

    </Layout>
  )
}