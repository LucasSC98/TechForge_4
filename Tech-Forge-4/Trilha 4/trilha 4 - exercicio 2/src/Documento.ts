// 2 - Documentos
//
// Crie uma interface chamada Documento com as
// propriedades titulo (string) e conteudo (string).
//     Implemente essa interface em uma classe chamada Texto e crie um método exibir()
//      que retorna uma string com o título e o conteúdo formatados
//      da seguinte forma: "Título: [titulo], Conteúdo: [conteudo]".

interface Documento {
    titulo: string;
    conteudo: string;
}

class Texto implements Documento {
    titulo: string;
    conteudo: string;

    constructor(titulo: string, codigo: string) {
        this.titulo = titulo;
        this.conteudo = codigo;
    }
    exibir(): string {
        return this.titulo + this.conteudo;
    }
}

const texto1 = new Texto("Harry Potter", "A jornada de um jovem bruxo que descobre seu passado, seus poderes e o mundo mágico ao qual pertence")
console.log(texto1);