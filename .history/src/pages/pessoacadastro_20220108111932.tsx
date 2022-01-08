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
    obterPessoa(router.query.id + "").then(data => {
      pessoaR = new Pessoa(data.nome, data.idade, data.id)
      console.log(pessoaR)
    })
  }

  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <FormularioPessoa
        paginaUnica={false}
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas}
        pessoa={router.query?.id ? pessoaR : pessoa} />
    </Layout>
  )
}