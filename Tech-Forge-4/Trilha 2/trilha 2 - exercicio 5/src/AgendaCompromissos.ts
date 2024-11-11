class Agenda{
    public compromissos: string[];

    constructor(compromissos: string[]) {
        this.compromissos = compromissos;
    }

    adicionarCompromisso(compromissosAdd: string[]) {
        console.log(`Compromissos na agenda: ${this.compromissos}`)
        console.log(`Você adicionou os seguintes compromissos na sua agenda: ${compromissosAdd}`);
        this.compromissos = [...this.compromissos, ...compromissosAdd];
    }

    listaTodosCompromissos(){
        console.log(`Lista de todos compromissos: ${this.compromissos} `);
    }
}
const compromissos = new Agenda(["Consulta dia 12/11"])
compromissos.adicionarCompromisso([" | Viajar dia 06/12 |" , "| Prova dia 09/12 |", "| Entrega de trabalho dia 19/12 |"])
compromissos.listaTodosCompromissos()
