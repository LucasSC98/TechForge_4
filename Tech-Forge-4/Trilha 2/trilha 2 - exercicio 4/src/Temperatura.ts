class TemperaturaConversor{
    private temperaturaCelsius: number;

    constructor(temperaturaCelsius: number){
        this.temperaturaCelsius = temperaturaCelsius;
    }

    converterFahrenheit(){
        console.log(`Temperatura em celsius: ${this.temperaturaCelsius}`);
        this.temperaturaCelsius = (this.temperaturaCelsius * 1.8) + 32;
        console.log(`Temperatura em Fahrenheit: ${this.temperaturaCelsius}\n`);

    }
    converterKelvin(){
        console.log(`Temperatura em celsius: ${this.temperaturaCelsius}`);
        this.temperaturaCelsius = this.temperaturaCelsius + 273.15;
        console.log(`Temperatura em Kelvin: ${this.temperaturaCelsius}`);
    }
}

const fahrenheit = new TemperaturaConversor(30);
fahrenheit.converterFahrenheit();
const kelvin = new TemperaturaConversor(30);
kelvin.converterKelvin();