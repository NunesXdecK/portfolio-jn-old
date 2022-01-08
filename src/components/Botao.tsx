import Link from "next/link"

interface BotaoProps {
    cor?: 'verde' | 'azul' | 'cinza' | 'vermelho'
    children: any,
    onClick?: () => void,
    link?: boolean,
    destino?: string
}

export default function Botao(props: BotaoProps) {
    const cinza = "bg-gray-800 hover:bg-gray-600"
    const vermelho = "bg-red-800 hover:bg-red-600"
    const azul = "bg-blue-800 hover:bg-blue-600"
    const verde = "bg-green-800 hover:bg-green-600"
    let cor = cinza

    switch (props.cor) {
        case 'vermelho':
            cor = vermelho
            break
        case 'azul':
            cor = azul
            break
        case 'verde':
            cor = verde
            break
    }

    const styleFinal = "px-4 py-2 mb-3 mr-3 rounded text-gray-200 " + cor + " transition"

    return (
        props.link ?
            (<Link href={props.destino}>
                <button className={styleFinal}>
                    {props.children}
                </button>
            </Link>)
            : (
                <button onClick={props.onClick} className={styleFinal}>
                    {props.children}
                </button>
            )
    )
}