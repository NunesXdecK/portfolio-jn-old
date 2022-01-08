import Pessoa from "./Pessoa";

export default interface PessoaRepositorio {
    salvar(pessoa: Pessoa): Promise<Pessoa>
    editar(pessoa: Pessoa): Promise<Pessoa>
    excluir(pessoa: Pessoa): Promise<void>
    obterTodos(): Promise<Pessoa[]>
}