import { useState } from "react";

export default function useTabelaForm() {
    const t = "tabela"
    const f = "formulario"
    const tf = t | f

    const [visivel, setVisivel] = useState<"tabela" | "formulario">(t)

    const exibirTabela = () => setVisivel
    return {
        tabelaVisivel: visivel === t,
        formularioVisivel: visivel === f
    }
}