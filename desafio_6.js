
class Carro{

    modelo;
    cor;
    gastoMedioPorKm;

    constructor (marca, cor, gastoMedioPorKm){

        this.marca = marca;
        this.cor = cor;
        this.gastoMedioPorKm = gastoMedioPorKm;

    }

    calcularGastoDePercurso (distanciaEmKm, precoCombustivel, gastoMedioPorKm){

        return distanciaEmKm * this.gastoMedioPorKm * precoCombustivel;

    }
    
}

const uno = new Carro("Fiat", "Preto", 1 / 12);
console.log(uno.calcularGastoDePercurso(70, 5));
const polo = new Carro("volkswagen", "Azul", 1 /10);
console.log(polo.calcularGastoDePercurso(70, 5))
