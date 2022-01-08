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
    pessoaR = new Pessoa(router.query.nome + "", +router.query.idade, router.query.id + "")
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