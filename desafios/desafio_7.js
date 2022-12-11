

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

        if (imc < 18.5){
            return ("under weight! " + imc.toFixed(2))
        } else if (imc >= 18.5 && imc <= 25){
            return ("normal weight! " + imc.toFixed(2))
        } else if (imc > 25 && imc <= 30){
            return ("overweight! " + imc.toFixed(2))
        } else if (imc > 30 && imc <= 40){
            console.log("obese! " + imc.toFixed(2))
        } else {
            return ("severe obesity! " + imc.toFixed(2))
        }
    }

}

const jose = new Pessoa("José", 70, 1.75);

console.log(jose.calculaImc());

console.log(jose.classificaImc());
