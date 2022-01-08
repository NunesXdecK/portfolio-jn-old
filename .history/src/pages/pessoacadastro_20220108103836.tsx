import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
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