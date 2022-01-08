import { useState } from "react";

export default function useTabelaForm() {
    const t = "tabela"
    const f = "formulario"

    const [visivel, setVisivel] = useState<"tabela" | "formulario">(t)

    const exibirTabela = () => setVisivel(t)
    const exibirFormulario = () => setVisivel(f)
    return {
        tabelaVisivel: visivel === t,
        formularioVisivel: visivel === f,
        exibirTabela,
        exibirFormulario
    }
}