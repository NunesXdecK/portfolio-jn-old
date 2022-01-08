import Link from "next/link";
import Pessoa from "../core/Pessoa";
import { IconeEdicao, IconeLixeira, IconeTabelaButtonEdicaoStyles, IconeTabelaButtonLixeiraStyles } from "./Icones";

interface TabelaProps {
    pessoas: Pessoa[],
    verId?: boolean,
    paginaUnica?: boolean,
    pessoaSelecionado?: (pessoa: Pessoa) => void,
    pessoaExcluido?: (pessoa: Pessoa) => void
}

export default function Tabela(props: TabelaProps) {

    let tdStyles = "text-center p-4"

    function renderizarCabecalho() {
        return (
            <tr>
                {props.verId ? <th className={tdStyles}>Código</th> : false}
                <th className={tdStyles}>Nome</th>
                <th className={tdStyles}>Idade</th>
                {props.pessoaSelecionado || props.pessoaExcluido ? (
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
                    {props.verId ? <td className={tdStyles}>{pessoa.id}</td> : false}
                    <td className={tdStyles}>{pessoa.nome}</td>
                    <td className={tdStyles}>{pessoa.idade}</td>
                    {props.pessoaSelecionado || props.pessoaExcluido ? (
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
                <button onClick={() => props.pessoaSelecionado?.(pessoa)} className={IconeTabelaButtonEdicaoStyles}>
                    {IconeEdicao}
                </button>
            )
        } else {
            botao = (
                <Link href={{ pathname: "/pessoacadastro", query: { "id": pessoa.id } }}>
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
                {props.pessoaSelecionado ? (
                    renderizaBotaoEdicao(pessoa)
                ) : false}

                {props.pessoaExcluido ? (
                    <button onClick={() => props.pessoaExcluido?.(pessoa)} className={IconeTabelaButtonLixeiraStyles}>{IconeLixeira}</button>
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