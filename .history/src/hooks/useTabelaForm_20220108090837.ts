import { useState } from "react";

export default function useTabelaForm() {
    const t = "tabela"
    const f = "formulario"
    const tf = t | f

    const [visivel, setVisivel] = useState<tf>(t)

    const exibirTabela = () => setVisivel
    return {
        tabelaVisivel: visivel === "tabela",
        formularioVisivel: visivel === "formulario"
    }
}