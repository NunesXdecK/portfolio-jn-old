import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const {
    pessoa,
    obterPessoas,
    salvarPessoa,
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <FormularioPessoa
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas} 
        pessoa={pessoa} />
    </Layout>
  )
}