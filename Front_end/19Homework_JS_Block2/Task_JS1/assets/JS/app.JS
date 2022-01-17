
let m = +prompt("Enter your mass (kg)");
console.log(`Mass: ${m}`);

let h = +prompt("Enter your height (m)");
console.log(`Height: ${h}`);

let l = m / h ** 2; 
console.log(`Body mass index: ${l}`);
alert(`Body mass index: ${l}`);

if(l <= 16){
    alert("You are severely underweight");
}

if(l > 16 && l <= 18.5){
    alert("You are underweight");
}

if(l > 18.5 && l <= 25){
    alert("Your weight is normal")
}

if(l > 25 && l <= 30){
    alert("Are you overweight (pre-obese)");
}

if(l > 30 && l <= 35){
    alert("You have Grade 1 Obesity");
}

if(l > 35 && l <= 40){
    alert("You have Grade 2 Obesity");
}

if(l > 40){
    alert("You have Grade 3 Obesity");
}

