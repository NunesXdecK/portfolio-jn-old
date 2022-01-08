import { useState } from "react";

export default function useTabelaForm() {
    const t = 'tabela'
    const f = 'formulario'

    const [visivel, setVisivel] = useState<t | f>(t)

    const exibirTabela = () => setVisivel
    return {
        tabelaVisivel: visivel === "tabela",
        formularioVisivel: visivel === "formulario"
    }
}