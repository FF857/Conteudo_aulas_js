let height_m = 1.75;
let weight_kg = 65.4;

let imc = (height_m * height_m)/ weight_kg;

if (imc < 18.5){
    console.log("under weight! " + imc.toFixed(2))
} else if (imc >= 18.5 && imc <= 25){
    console.log("normal weight! " + imc.toFixed(2))
} else if (imc > 25 && imc <= 30){
    console.log("overweight! " + imc.toFixed(2))
} else if (imc > 30 && imc <= 40){
    console.log("obese! " + imc.toFixed(2))
} else {
    console.log("severe obesity! " + imc.toFixed(2))
}