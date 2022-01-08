interface EntradaTextoProps {
    tipo: 'text' | 'number'
    texto: string
    valor?: any
    somenteLeitura?: boolean
    quandoAlterar?: (alterou: any) => void
}

export default function EntradaTexto(props: EntradaTextoProps) {
    return (
        <div className="flex flex-col mb-4">
            <label>{props.texto}</label>
            <div className="flex items-center border-b border-gray-400 focus:bg-gray-800">
                <input
                    className="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                    onChange={e => props.quandoAlterar?.(e.target.value)}
                    type={props.tipo ?? 'text'}
                    value={props.valor}
                    readOnly={props.somenteLeitura}
                />
            </div>
        </div>
    )
}