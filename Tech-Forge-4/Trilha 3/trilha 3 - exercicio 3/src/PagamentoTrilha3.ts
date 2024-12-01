

abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    processar(): void {
        console.log(`Processando pagamento com cartão:  ${this.numeroCartao}, verificando cartão...: ${validarCartao(this.numeroCartao)}`);
    }
}

class PagamentoBoleto extends Pagamento {
    constructor() {
        super();
    }

    processar(): void {
        console.log(`Boleto gerado, codigo:  ${gerarBoleto()} `);
    }
}
function gerarBoleto () : string{
    return Array(48).fill(0).map(() => Math.floor(Math.random() * 10)).join('');
}

function validarCartao(numeroCartao: string): string {
    if(numeroCartao.length === 16) {
        return "Cartão válido";
    }else
    return "Cartão inválido";
}

const pagamentoBoleto = new PagamentoBoleto();
pagamentoBoleto.processar();
const pagamentoCartao = new PagamentoCartao("1234567890123456");
pagamentoCartao.processar();

