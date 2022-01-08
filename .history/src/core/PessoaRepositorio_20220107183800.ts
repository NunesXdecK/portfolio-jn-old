import Pessoa from "./Pessoa";

export default interface PessoaRepositorio {
    salvar(pessoa: Pessoa): Pessoa
    excluir(pessoa: Pessoa): void
    obterTodos(): Pessoa[]
}