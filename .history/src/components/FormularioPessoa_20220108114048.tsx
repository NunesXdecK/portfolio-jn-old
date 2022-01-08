import Router from "next/router";
import { useState } from "react";
import Pessoa from "../core/Pessoa";
import Botao from "./Botao";
import EntradaTexto from "./EntradaTexto";

interface FormularioPessoaProps {
    pessoa?: Pessoa,
    salvarFuncao?: (pessoa: Pessoa) => void,
    resetarFuncao?: (pessoa: Pessoa) => void,
    paginaUnica: boolean,
    voltarFuncao?: () => void
}

export default function FormularioPessoa(props: FormularioPessoaProps) {
    const id = props.pessoa?.id
    const [nome, setNome] = useState(props.pessoa?.nome ?? '');
    const [idade, setIdade] = useState(props.pessoa?.idade ?? 0);

    console.log(props.paginaUnica)

    function resetaFormulario() {
        if (!props.paginaUnica) {
            
        }
        setNome("")
        setIdade(0)
    }

    return (
        <div className="my-10">
            <div className="py-4">
                {id ? (
                    <EntradaTexto tipo="text" texto="Id" somenteLeitura={true} valor={id} />
                ) : false}
                <EntradaTexto tipo="text" texto="Nome" quandoAlterar={setNome} valor={nome} />
                <EntradaTexto tipo="number" texto="Idade" quandoAlterar={setIdade} valor={idade} />

            </div>

            <div className="flex items-center justify-between">
                <div>
                    <Botao
                        cor="azul"
                        onClick={() => {
                            props.salvarFuncao?.(new Pessoa(nome, +idade, id))
                            if (!props.paginaUnica) {
                                Router.push("/pessoa")
                            }
                        }}>
                        {id ? 'Alterar' : 'Cadastrar'}
                    </Botao>
                    <Botao onClick={resetaFormulario} cor="verde">Limpar</Botao>
                </div>

                {props.paginaUnica ? (
                    <Botao onClick={props.voltarFuncao} cor="cinza">Voltar</Botao>
                ) : (
                    <Botao link={true} destino="/pessoa" cor="cinza">Voltar</Botao>
                )}
            </div>
        </div>
    )
}