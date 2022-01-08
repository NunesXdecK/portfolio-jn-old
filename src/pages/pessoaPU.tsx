import Botao from "../components/Botao";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const {
    tabelaVisivel,
    pessoa,
    pessoas,
    obterPessoas,
    salvarPessoa,
    novaPessoa,
    selecionarPessoa,
    exlcuirPessoa
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Mudando Pagina Unica">
      {tabelaVisivel ? (
        <>
          <Botao onClick={novaPessoa} cor="cinza">Nova pessoa</Botao>
          <Tabela
            pessoas={pessoas}
            verId={true}
            paginaUnica={true}
            selecionarPessoa={selecionarPessoa}
            excluirPessoa={exlcuirPessoa} />
        </>
      ) : (
        <FormularioPessoa
          salvarFuncao={salvarPessoa}
          paginaUnica={true}
          voltarFuncao={obterPessoas} pessoa={pessoa} />
      )}

    </Layout>
  )
}