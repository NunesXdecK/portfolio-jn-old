interface TituloProps {
    children?: any
}

export default function Titulo(props: TituloProps) {
    return (
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">{props.children ?? "Titulo Placeholder"}</h1>
        </div>
    )
}