import { useRouter } from "next/router";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const router = useRouter()

  const {
    pessoa,
    obterPessoas,
    obterPessoa,
    salvarPessoa,
  } = usePessoas()

  if (router.query?.id) {
    console.log(obterPessoa(router.query.id + ""))
  }


  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <FormularioPessoa
        paginaUnica={false}
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas}
        pessoa={router.query?.id ? obterPessoa(router.query.id + "") : pessoa} />
    </Layout>
  )
}