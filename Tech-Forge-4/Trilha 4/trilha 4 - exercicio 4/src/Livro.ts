

interface Livro {
    titulo: string;
    autor: string;
    disponivel: boolean;

}

class Biblioteca {
    livros: Livro[];

    constructor() {
        this.livros = [];
    }

    adicionarLivro(livro: Livro) {
        this.livros.push(livro);
    }

    verificarLivrosDisponiveis() {
       return this.livros.filter(livro => livro.disponivel)
    }
}

const biblioteca = new Biblioteca();

biblioteca.adicionarLivro({titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K.Rowling", disponivel: true });
biblioteca.adicionarLivro({titulo: "O Senhor dos Anéis: A Sociedade do Anel", autor: "JR.R", disponivel: true });
biblioteca.adicionarLivro({titulo: "1984", autor: "George Orwell", disponivel: false });

console.log(biblioteca.verificarLivrosDisponiveis());