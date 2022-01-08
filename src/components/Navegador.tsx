import Link from 'next/link'

interface NavegadorProps {
    children?: any
    destino: any
}

export default function Navegador(props: NavegadorProps) {
    return (
        <Link href={props.destino} passHref>
            <div className="h-10 p-3 flex rounded-md items-center cursor-pointer text text-gray-300 hover:bg-gray-700 hover:text-white ">
                {props.children ?? 'Titulo placeholder'}
            </div>
        </Link>
    )
}