
/* go to Torres beach fuel value */

let Type_fuel = "Gasoline";      /* pode colocar input*/
let ethanol_value = 3.40;
let gasoline_value = 4.77;
let km_for_l= 15;
let distance_Km = 195;
let l_consumption;


if (Type_fuel === "Gasoline"){
    l_consumption = distance_Km / km_for_l;

    let result = l_consumption * gasoline_value;

    console.log(result.toFixed(2));
} else if (Type_fuel === "Ethanol"){
    l_consumption = distance_Km / km_for_l;

    let result = l_consumption * ethanol_value;

    console.log(result.toFixed(2));
} else {
    console.log("incorrect value!")
}



