import Botao from "../components/Botao";
import Layout from "../components/Layout";
import Tabela from "../components/Tabela";
import usePessoas from "../hooks/usePessoas";

export default function Home() {

  const {
    pessoas,
    selecionarPessoa,
    exlcuirPessoa
  } = usePessoas()

  return (
    <Layout titulo="Pessoas Mudando Paginas">
      <Botao link={true} destino="/pessoacadastro" cor="cinza">Nova pessoa</Botao>
      <Tabela
        pessoas={pessoas}
        selecionarPessoa={selecionarPessoa}
        excluirPessoa={exlcuirPessoa} />
    </Layout>
  )
}