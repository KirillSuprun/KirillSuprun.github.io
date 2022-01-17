
let V = +prompt(`Enter Volume of material (m*3)`);
console.log(`Volume of material - ${V} m*3`);

let m = +prompt(`Enter Mass of material (kg)`);
console.log(`Mass of material - ${m} kg`);

let p = m / V;
console.log(`Density of material - ${p} kg/m*3`);

alert(`Density of material - ${p} kg/m*3`)