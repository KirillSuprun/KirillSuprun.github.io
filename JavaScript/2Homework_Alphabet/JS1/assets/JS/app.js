


// let arrLetter = ['aA', 'bB', 'cC', 'dD', 'eE', 'fF', 'gG', 'hH', 'iI', 'jJ', 'kK', 'lL', 'mM', 'Nn', 'oO', 'pP', 'qQ', 'rR', 'sS', 'tT', 'uU', 'vV', 'wW', 'xX', 'yY', 'zZ', ];
let abbreviation = prompt("Введите Аббревиатуру для переноса в алфавит ICAO");
console.log(`Аббревиатура ${abbreviation}`);


let arrAbb = abbreviation.split('');
console.log('arrAbb', arrAbb);




let arrLetter = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z',' ', 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, '.'];
console.log(`letters`, arrLetter);
let arrWords = ['Alpha', 'Bravo', 'Charlie', 'Delta', 'Echo', 'Foxtrot', 'Golf', 'Hotel', 'India', 'Juliet', 'Kilo', 'Lima', 'Mike', 'November', 'Oscar', 'Papa', 'Quebec', 'Romeo', 'Sierra', 'Tango', 'Uniform', 'Victor', 'Whiskey', 'X-ray', 'Yankee', 'Zulu',  ' ', 'Zero', 'One', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Niner','Stop',]; // 'Decimal'
console.log(`Words`, arrWords);



// let check = [];

// check.push(arrAbb[0]);
// console.log(check);



let result = [];
for (let i = 0; i < arrAbb.length; i++){

    for (let j = 0; j < arrLetter.length; j++){
        if(arrAbb[i].toLowerCase() == arrLetter[j]){
        result.push(arrWords[j]);
        break
        }
    }
}

console.log(`Result`, result);

result = result.join(' ');
console.log(`Final`, result);

alert(`Ваше выражение: - ${abbreviation} - в алфавите ICAO выглядит как: - ${result}`);