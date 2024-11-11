class ContaBanco {
    private nomeTitular: string;
    private saldo: number;

    constructor(nomeTitular: string, saldo: number) {
        this.nomeTitular = nomeTitular;
        this.saldo = saldo;
    }
    sacar(sacar: number) {
        console.log(`Cliente: ${this.nomeTitular}\nSaldo atual: ${this.saldo}`);
        this.saldo = this.saldo - sacar;
        console.log(`Você sacou: ${sacar} \nSaldo restante: ${this.saldo}\n`);
    }
    depositar(deposito: number) {
        console.log(`Cliente: ${this.nomeTitular}\nSaldo atual: ${this.saldo}`);
        this.saldo = this.saldo + deposito;
        console.log(`Você depositou: ${deposito} \nSaldo bancario: ${this.saldo}`);
    }
}
const contaBanco = new ContaBanco("Lucas", 2000)
contaBanco.sacar(100)
const contaBanco2 = new ContaBanco("Mario", 2000)
contaBanco2.depositar(200)