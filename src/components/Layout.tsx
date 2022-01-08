import Menu from "./Menu"
import Titulo from "./Titulo"

interface LayoutProps {
    titulo?: string
    children?: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className="h-full">
            <header>
                <Menu/>
                <div className="bg-white shadow">
                    <Titulo>{props.titulo}</Titulo>
                </div>
            </header>

            <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="p-5 border-4 border-dashed border-gray-200 rounded-lg">
                            {props.children ?? "Sem Conteúdo"}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}