//Crie uma classe abstrata Funcionario com atributos encapsulados nome,
// salario e um método abstrato calcularBonus().
//  Crie subclasses Gerente e Operario. O Gerente tem um bônus de 10% sobre o salário, e o Operario tem um bônus de 5%.
//  Crie uma função calcularSalarioComBonus() que aceite um array de funcionários e calcule o salário final,
//  aplicando o bônus específico de cada um, usando polimorfismo.

abstract class Funcionario {
    salario: number;
    nome: string;
    constructor(nome: string, salario: number) {
        this.nome = nome;
        this.salario = salario;
    }
    abstract calcularBonus(): number;
}

class Gerente extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    calcularBonus(): number {
        return this.salario * 0.10;
    }
}

class Operario extends Funcionario {
    constructor(nome: string, salario: number) {
        super(nome, salario);
    }
    calcularBonus(): number {
        return this.salario * 0.05;
    }
}

function calcularSalarioComBonus(funcionarios: Funcionario[]): number {
    return funcionarios.reduce((acc, funcionario) => acc + funcionario.salario + funcionario.calcularBonus(), 0);
}

const gerente = new Gerente('João', 5000);
const operario = new Operario('Maria', 3000);
const salarioTotal = calcularSalarioComBonus([gerente, operario]);
console.log(salarioTotal);

