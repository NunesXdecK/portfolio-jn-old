import { useRouter } from "next/router";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const router = useRouter()

  const {
    pessoa,
    obterPessoas,
    salvarPessoa,
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <FormularioPessoa
        paginaUnica={false}
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas}
        pessoa={router.query.id? pessoa} />
    </Layout>
  )
}