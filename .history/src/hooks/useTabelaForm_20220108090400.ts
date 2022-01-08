import { useState } from "react";

export default function useTabelaForm() {
    const [visivel, setVisivel] = useState<"tabela" | "formulario">("tabela")

    return {
        visivel
    }
}