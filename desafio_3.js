
let result1 = 7;
let result2 = 6.5;
let result3 = 9.1;

let the_answer; 

let result4 = (result1 + result2 + result3)/ 3;

if (result4 <5){
    console.log("disapproved! " + result4.toFixed(2))
} else if (result4 >= 5 && result4 <= 7){
    console.log("recuperation! " + result4.toFixed(2))
}else {
    console.log("approved! " + result4.toFixed(2))
}

