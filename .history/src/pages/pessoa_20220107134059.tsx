import Link from "next/link";
import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Navegador from "../components/Navegador";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";

export default function Home() {
  
  const pessoas = Pessoa.pessoas()

  function pessoaSelecionado(pessoa: Pessoa) {
    console.log(pessoa.nome)
  }

  function pessoaExcluido(pessoa: Pessoa) {
    console.log(pessoa.nome)
  }

  return (
    <Layout titulo="Pessoas navegando entre páginas">
      <Botao link={true} destino="/pessoacadastro" cor="cinza">Nova pessoa</Botao>
      <Tabela pessoas={pessoas} verId={true} pessoaSelecionado={pessoaSelecionado} pessoaExcluido={pessoaExcluido}></Tabela>
    </Layout>
  )
}