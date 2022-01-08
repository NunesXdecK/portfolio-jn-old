import { useState } from "react";

export default function useTabelaForm() {
const tabela = "tabela"
const formulario = "formulario"

    const [visivel, setVisivel] = useState<tabela | formulario>(tabela)

    const exibirTabela = () => setVisivel
    return {
        tabelaVisivel: visivel === "tabela",
        formularioVisivel: visivel === "formulario"
    }
}