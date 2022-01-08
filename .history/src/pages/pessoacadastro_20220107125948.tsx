import FormularioPessoa from "../components/FormularioPessoa";
import Layout from "../components/Layout";
import Pessoa from "../core/Pessoa";
import { useRouter } from 'next/router'

export default function Home() {
  const router = useRouter()
  const id = router.query.id

  const pessoas = Pessoa.pessoas()

  let pessoa = Pessoa.vazio()

  if (id) {
    pessoas.map((p, i) => {
      p.id === id ? pessoa = p : false
    })
  }

  return (
    <Layout titulo="Cadastro de pessoa">
      <FormularioPessoa pessoa={pessoa} />
    </Layout>
  )
}