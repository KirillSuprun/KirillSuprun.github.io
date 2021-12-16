
let y = +prompt("Enter year");
console.log(`Year: ${y}`);

if(y % 100 == 0 && y % 400 !== 0 || y % 4 !== 0 )  {
    alert(`${y} year is not Leap Year`);
}

else if(y % 4 == 0 || y % 400 == 0){
    alert(`${y} year is Leap Year `); 
}



