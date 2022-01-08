import Link from "next/link";
import Pessoa from "../core/Pessoa";
import { IconeEdicao, IconeLixeira, IconeTabelaButtonEdicaoStyles, IconeTabelaButtonLixeiraStyles } from "./Icones";

interface TabelaProps {
    pessoas: Pessoa[],
    verId?: boolean,
    paginaUnica?: boolean,
    selecionarPessoa?: (pessoa: Pessoa) => void,
    excluirPessoa?: (pessoa: Pessoa) => void
}

export default function Tabela(props: TabelaProps) {

    let tdStyles = "text-center p-4"
    let tdStylesSm = tdStyles + " md:invisible"

    function renderizarCabecalho() {
        return (
            <tr>
                {props.verId ? <th className={tdStylesSm}>Código</th> : false}
                <th className={tdStyles}>Nome</th>
                <th className={tdStylesSm}>Idade</th>
                {props.selecionarPessoa || props.excluirPessoa ? (
                    <th className={tdStyles}>Ações</th>
                ) : false}
            </tr>
        )
    }

    function renderizarDados() {
        return props.pessoas?.map((pessoa, i) => {
            return (
                <tr key={pessoa.id}
                    className={`${i % 2 === 0 ? "bg-gray-100" : "bg-gray-200"}`}>
                    {props.verId ? <td className={tdStylesSm}>{pessoa.id}</td> : false}
                    <td className={tdStyles}>{pessoa.nome}</td>
                    <td className={tdStylesSm}>{pessoa.idade}</td>
                    {props.selecionarPessoa || props.excluirPessoa ? (
                        renderizarAcoes(pessoa)
                    ) : false}
                </tr>
            )
        })
    }
    
    function renderizaBotaoEdicao(pessoa: Pessoa) {
        let botao
        if (props.paginaUnica) {
            botao = (
                <button onClick={() => props.selecionarPessoa?.(pessoa)} className={IconeTabelaButtonEdicaoStyles}>
                    {IconeEdicao}
                </button>
            )
        } else {
            botao = (
                <Link href={{ pathname: "/pessoacadastro", query: { "id": pessoa.id, "nome": pessoa.nome, "idade": pessoa.idade } }}>
                    <button className={IconeTabelaButtonEdicaoStyles}>
                        {IconeEdicao}
                    </button>
                </Link>
            )
        }
        return botao
    }

    function renderizarAcoes(pessoa: Pessoa) {
        return (
            <td className="p-4 justify-center flex">
                {props.selecionarPessoa ? (
                    renderizaBotaoEdicao(pessoa)
                ) : false}

                {props.excluirPessoa ? (
                    <button onClick={() => props.excluirPessoa?.(pessoa)} className={IconeTabelaButtonLixeiraStyles}>{IconeLixeira}</button>
                ) : false}
            </td>
        )
    }

    return (
        <table className="w-full overflow-hidden rounded">
            <thead className="bg-gray-800 text-gray-300">
                {renderizarCabecalho()}
            </thead>
            <tbody>
                {renderizarDados()}
            </tbody>
        </table>
    )
}