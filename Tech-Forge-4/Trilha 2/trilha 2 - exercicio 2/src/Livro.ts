class Livro{
    private titulo: string;
    private autor: string;
    private paginas: number;
    private livrolido: boolean

    constructor(titulo: string, autor: string, paginas: number, livrolido: boolean) {
        this.titulo = titulo;
        this.autor = autor;
        this.paginas = paginas;
        this.livrolido = livrolido;
    }

    livroinfo() {
        console.log(`Livro: ${this.titulo}\nAutor: ${this.autor}\nPaginas: ${this.paginas} Foi lido: ${this.livrolido}`);

        if (this.livrolido == true) {
            console.log(`Foi lido: sim`);
        }else{
            console.log(`Foi lido: não`);
        }
    }
}

const livro1 = new Livro("Harry Potter", "JK", 240, true)
livro1.livroinfo();