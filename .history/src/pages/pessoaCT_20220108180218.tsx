import { useRouter } from "next/router";
import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import Pessoa from "../core/Pessoa";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  
  const router = useRouter()
  let pessoaR = Pessoa.vazio()

  const {
    pessoa,
    pessoas,
    obterPessoas,
    salvarPessoa,
    selecionarPessoa,
    exlcuirPessoa
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Cadastro e Tabela">
      <FormularioPessoa
        paginaUnica={true}
        botaoVoltar={false}
        salvarFuncao={salvarPessoa}
        voltarFuncao={obterPessoas} pessoa={pessoa} />

      <Tabela
        paginaUnica={true}
        pessoas={pessoas}
        selecionarPessoa={selecionarPessoa}
        excluirPessoa={exlcuirPessoa} />

    </Layout>
  )
}