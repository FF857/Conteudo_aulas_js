

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

}

const felipe = new Pessoa("Felipe", 64.00, 174);

console.log(felipe);
