import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio";
import PessoaColecao from "../db/PessoaColecao";

export default function Home() {

  

  return (
    <Layout titulo="Pessoas Mudando Pagina Unica">
      {visivel === "tabela" ? (
        <>
          <Botao onClick={novaPessoa} cor="cinza">Nova pessoa</Botao>
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
          pessoaNova={novaPessoa}
          paginaUnica={true}
          paginaUnicaFuncao={() => setVisivel("tabela")} pessoa={pessoa} />
      )}

    </Layout>
  )
}