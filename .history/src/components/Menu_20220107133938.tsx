import Navegador from "./Navegador"

interface MenuProps {
    titulo?: any
}

export default function Menu(props: MenuProps) {
    return (
        <div className="min-h-full">
            <div className="bg-gray-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16">
                        <div className="flex items-center">
                            <div className="flex-shrink-0">
                                <img
                                    className="h-10 w-10"
                                    src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                                    alt="Workflow"
                                />
                            </div>
                        </div>
                        <img
                            src="https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg"
                            alt="Workflow"
                            className="h-8 w-8 rounded-full"
                        />
                    </div>

                    <div className="flex items-center justify-between">
                        <nav className="p-3 flex items-center">
                            <Navegador destino="/">Inicio</Navegador>
                            <Navegador destino="/pessoa">Pessoas EP</Navegador>
                            <Navegador destino="/pessoacadastrodois">Pessoas PU</Navegador>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    )
}