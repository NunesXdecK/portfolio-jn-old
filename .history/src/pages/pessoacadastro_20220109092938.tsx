import { useRouter } from "next/router";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Pessoa from "../core/Pessoa";
import usePessoas from "../hooks/usePessoas";

export default function Home() {
  let router = false
  if (useRouter()) {
    router = useRouter()
  }
  let pessoaR = Pessoa.vazio()

  const {
    pessoa,
    obterPessoas,
    salvarPessoa,
  } = usePessoas()

  if (router?.query?.id) {
    pessoaR = new Pessoa(router.query.nome + "", +router.query.idade, router.query.id + "")
  }

  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <FormularioPessoa
        paginaUnica={false}
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas}
        pessoa={pessoaR?.id ? pessoaR : pessoa} />
    </Layout>
  )
}