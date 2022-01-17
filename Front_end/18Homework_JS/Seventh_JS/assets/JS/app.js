
let a = +prompt(`Enter a`);
console.log(`a = ${a}`);

let y = ((a ** 2) + 10) / Math.sqrt((a ** 2) + 1);
console.log(`y = ${y}`);

let yo = Math.round(y * 100) / 100;
console.log(`rounded to the nearest hundredth - ${yo}`);

alert(`y = ${yo}`)