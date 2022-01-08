import { useRouter } from "next/router";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Pessoa from "../core/Pessoa";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const router = useRouter()
  let pessoaR = Pessoa.vazio()
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
        pessoa={router.query?.id ? pessoa : pessoa} />
    </Layout>
  )
}