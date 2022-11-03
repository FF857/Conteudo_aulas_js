/* is it divisible for five or not?*/

const number = 10;

const isNumberDivisibleFor5= (numero % 5) === 0;

if (number === 0){
    console.log("invalid value!");
} else if (isNumberDivisibleFor5){
    console.log("yes!");
} else {
    console.log("no!")
}

