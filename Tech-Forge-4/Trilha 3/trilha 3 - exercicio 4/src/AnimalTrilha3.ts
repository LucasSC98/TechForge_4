//Crie uma classe Animal com um atributo privado energia e um método comer() que aumenta a energia.
// Crie subclasses Leao e Passaro, onde Leao usa o método comer() para caçar (gasta energia primeiro e
//  depois recupera) e Passaro usa comer() para se alimentar (só aumenta energia). Crie um método statusEnergia()
//   que exibe o nível de energia do animal.
// Use polimorfismo para chamar esses métodos para diferentes animais.

abstract class Animal {
    energia: number = 0;

    comer(): void {
        this.energia++;
    }

    statusEnergia(): void {
        console.log(`Energia atual: ${this.energia}`);
    }
}
class Leao extends Animal {
    comer(): void {
        this.energia = 2;
        console.log('Energia do leao antes de comer: ', this.energia);
        console.log(`Leao caçando para comer, Energia agora : ${this.energia-1}`);
        super.comer();
    }
    statusEnergia() {
        console.log(`Energia atual do leao depois de caçar e comer: ${this.energia++}`);
    }
}
class Passaro extends Animal {
    comer(): void {
        this.energia = 2;
        console.log("Energia do passaro antes de comer: ", this.energia);
        console.log('Passaro comeu...');
        super.comer();
    }
    statusEnergia() {
        console.log(`Energia atual do passaro agora: ${this.energia}`);
    }
}
const leao = new Leao();
const passaro = new Passaro();
leao.comer();
leao.statusEnergia();
passaro.comer();
passaro.statusEnergia();