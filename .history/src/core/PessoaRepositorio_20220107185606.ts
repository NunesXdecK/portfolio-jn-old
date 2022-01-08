import Pessoa from "./Pessoa";

export default interface PessoaRepositorio {
    salvar(pessoa: Pessoa): Pessoa
    excluir(pessoa: Pessoa): Pessoa
    obterTodos(): Pessoa[]
}