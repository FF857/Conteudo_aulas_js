

class Pessoa {

    nome;
    peso;
    altura;

    calculaIMC(peso, altura){

        this.peso = peso;
        this.altura = altura;

        return imc = peso / (altura * altura);
        
    }

}

const felipe = new Pessoa("Felipe", 64.00, 174);

console.log(felipe.calculaIMC(64.00, 174));