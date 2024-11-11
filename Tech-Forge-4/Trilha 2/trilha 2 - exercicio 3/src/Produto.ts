class Produto{
    private nome: string;
    private preco: number
    private quantidade: number

    constructor(nome: string, preco: number, quantidade: number) {
        this.nome = nome;
        this.preco = preco;
        this.quantidade = quantidade;
    }

    calcularProduto(){
        console.log(`Produto: ${this.nome}\nValor unitario: ${this.preco}`);
        this.preco = this.preco * this.quantidade;
        console.log(`Total de produtos: ${this.quantidade}\nValor Total: ${this.preco}`);
    }
}

const produto = new Produto("Café", 5.70, 5)
produto.calcularProduto();