import { useEffect, useState } from "react";
import Botao from "../components/Botao";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";
import PessoaRepositorio from "../core/PessoaRepositorio";
import PessoaColecao from "../db/PessoaColecao";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const {
    tabelaVisivel,
    pessoa,
    pessoas,
    obterPessoas,
    salvarPessoa,
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Cadastro e Tabela">
      <FormularioPessoa
        salvarFuncao={salvarPessoa}
        paginaUnica={true}
        voltarFuncao={obterPessoas} pessoa={pessoa} />
    </Layout>
  )
}