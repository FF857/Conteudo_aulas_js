class Pessoas {

    nome;
    idade;
    
    descrever() {
    console.log(`Meu nome é  ${this.nome}, minha idade é ${this.idade}` );        
    }
}

const felipe = new Pessoas();
felipe.nome = "Felipe S Ferreira";
felipe.idade = 21;


felipe.descrever();