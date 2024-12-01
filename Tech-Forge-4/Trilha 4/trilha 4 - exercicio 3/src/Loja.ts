
interface ProdutoLoja{
    codigo: number;
    nome: string;

}

class Loja {
    produtos: ProdutoLoja[];

    constructor() {
        this.produtos = [];
    }

    adicionarProduto(produto: ProdutoLoja){
        this.produtos.push(produto);
    }

    buscarProdutoPorCodigo(codigo: number):ProdutoLoja | undefined {
        return this.produtos.find(produto => produto.codigo === codigo);
    }
}

const minhaLoja = new Loja();

minhaLoja.adicionarProduto({codigo: 123, nome: "Arroz"})
minhaLoja.adicionarProduto({codigo: 127, nome: "Feijão"})
minhaLoja.adicionarProduto({codigo: 128, nome: "Macarrão"})
minhaLoja.adicionarProduto({codigo: 812, nome: "Trigo"})



console.log(minhaLoja.buscarProdutoPorCodigo(123));
console.log(minhaLoja.buscarProdutoPorCodigo(999));