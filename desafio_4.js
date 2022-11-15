function potenciacao(base){
    let num2 = base;
    let potencia = (base * num2);
    console.log(potencia);
}


function imc1(peso, altura){
    let number = peso/(altura ** 2);
    console.log(number.toFixed(2));

    if (number < 18.5){
        console.log("under weight! " + number.toFixed(2))
    } else if (number >= 18.5 && number <= 25){
        console.log("normal weight! " + number.toFixed(2))
    } else if (number > 25 && number <= 30){
        console.log("overweight! " + number.toFixed(2))
    } else if (number > 30 && number <= 40){
        console.log("obese! " + number.toFixed(2))
    } else {
        console.log("severe obesity! " + number.toFixed(2))
    }
}

imc1(65, 1.74);
