interface LivroBiblioteca {
    titulo: string;
    autor: string;
    genero: string;
    disponivel: boolean;
}

class BibliotecaGestao {
    livros: LivroBiblioteca[];

    constructor( ) {
        this.livros = [];
    }
    adicionarLivros(livros: LivroBiblioteca) {
        this.livros.push(livros);
    }

    filtrarPorGenero(genero: string) : LivroBiblioteca[] {
        return this.livros.filter(livro => livro.genero === genero);

    }
    buscarPorAutor(autor: string) : LivroBiblioteca []{
        return this.livros.filter(livro => livro.autor === autor);
    }

    obterLivrosDisponiveisOrdenados(){
        return this.livros.filter(livro => livro.disponivel).sort((a, b) => a.titulo.localeCompare(b.titulo));
    }

}

const bibliotecaGestao = new BibliotecaGestao();
bibliotecaGestao.adicionarLivros({titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K. Rowling", genero: "Fantasia", disponivel: true })
bibliotecaGestao.adicionarLivros({titulo: "Matar a Saudade", autor: "Jorge Amado", genero: "Romance", disponivel: true})
bibliotecaGestao.adicionarLivros({titulo: "O Grande Gatsby", autor: "F. Scott Fitzgerald", genero: "Ficção", disponivel: true})
bibliotecaGestao.adicionarLivros({titulo: "1984", autor: "George Orwell", genero: "Distopia", disponivel: true})



console.log(bibliotecaGestao.buscarPorAutor("Jorge Amado"));
console.log(bibliotecaGestao.filtrarPorGenero("Distopia"))
console.log(bibliotecaGestao.obterLivrosDisponiveisOrdenados())
