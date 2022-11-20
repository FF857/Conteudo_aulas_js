const felipe = {
    idade: 21,
    peso: 65,
    
    descrever: function () {
        console.log(`Minha idade é  ${this.idade}, meu peso é ${this.altura}` );
    }
}

felipe.altura = 1.75;
felipe.cor = "pardo"; 

felipe.descrever();