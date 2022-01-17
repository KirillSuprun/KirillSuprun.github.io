
let a = +prompt(`Enter a - first leg of a right triangle (mm)`);
console.log(`First leg of a right triangle (a) = ${a} mm`);

let b = +prompt(`Enter b - second leg of a right triangle (mm)`);
console.log(`Second leg of a right triangle (b) = ${b} mm`);

let c = Math.sqrt((a ** 2) + (b ** 2));
console.log(`Hypotenuse = ${c} mm`);

alert(`Hypotenuse = ${c} mm`);
