import Pessoa from "./Pessoa";

export default interface PessoaRepositorio {
    salvar(pessoa: Pessoa): Promise<QuerySnapShop<Pessoa>>
    excluir(pessoa: Pessoa): Promise<void>
    obterTodos(): Promise<Pessoa[]>
}