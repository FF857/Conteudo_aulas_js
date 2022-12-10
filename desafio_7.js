

class Pessoa {

    nome;
    peso;
    altura;

    constructor (nome, peso, altura){

        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        
    }


    calculaImc (){

        return this.peso / (this.altura * this.altura);

    }

    classificaImc(){

        const imc = this.calculaImc();

        if(imc >= 21){

        }
    }

}

const jose = new Pessoa("José", 70, 1.75);

console.log(jose.calculaImc());

const felipe = new Pessoa("Felipe", 64, 1.75);

console.log(felipe.calculaImc());
