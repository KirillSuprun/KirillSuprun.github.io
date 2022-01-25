// new RegExp('ab+c', 'i');
// var re = new RegExp('\\w+');

let paySum = String(+prompt(`Введіть тризначне число переказу коштів`));
console.log(`Сумма`, paySum)
let arrSumMany = Array.from(paySum); // Трансформируем число в массив

console.log(`Сумма массив мени`, arrSumMany);
console.log(`длинна arrSum мени`,arrSumMany.length);;

let arrSum = arrSumMany.slice(-3);  // отделяем от большого числа, нужное трехзначное

console.log(`Сумма массив аррсум`, arrSum);
console.log(`длинна arrSum`, arrSum.length);;

let result = [];


let arrMore100 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]; // 0 добавлен, если масив оттделяеться от большего числа с 0. 
let arrMore100Words = ['', 'Сто', 'Двісті', 'Триста', 'Чотириста', 'Пятьсот', 'Шістьсот', 'Сімсот', 'Вісімсот', 'Девятьсот']; 



if(arrSum.length === 3){
    
    for (let i = 0; i < arrMore100.length; i++){
        if(arrMore100[i] == arrSum[0]){
            result.push(arrMore100Words[i]); 
            // console.log(`ответ массивом`, result);
            arrSum.shift(0);
            break
        }
    }
}   // До этого места, код работает

// console.log(`длинна arrSum`,arrSum.length);
// console.log(`Сумма массив`, arrSum);
// console.log(`ответ массивом`, result);

let arrMore10 = [10, 11, 12, 13, 14, 15, 16, 17, 18, 19];
let arrMore10Words = ['Десять', 'Одинадцять', 'Дванадцять', 'Тринадцять', 'Чотирнадцять', 'Пятьнадцять', 'Шістнадцять', 'Сімнадцять', 'Вісімнадцять', 'Девятнадцять'];

let arrMore20 = [0, 2, 3, 4, 5, 6, 7, 8, 9];
let arrMore20Words = ['', 'Двадцять', 'Тридцять', 'Сорок', 'Пятдесят', 'Шістдесят','Сімдесят', 'Вісімдесят', 'Девяносто'];

if(arrSum.length === 2){
    if(arrSum[0] == 1){
        let sumMore10 = arrSum.join('');
        // console.log(`Сум после джоина`, sumMore10);
         for(let j = 0; j < arrMore10.length; j++){
            if(arrMore10[j] == sumMore10){
                result.push(arrMore10Words[j]); // + ' Гривень'
                arrSum.length = 0;
                // console.log(arrSum)
                // console.log(`ответ массивом`, result);
                break
            }

         }
    } 
    else { 
        for(let j = 0; j < arrMore20.length; j++){
            if(arrMore20[j] == arrSum[0]){
                result.push(arrMore20Words[j]); // + ' Гривень'
                arrSum.shift(0);
                
                // console.log(`длинна arrSum`,arrSum.length);
                // console.log(`Сумма массив`, arrSum);

                // console.log(`ответ массивом`, result);

                break
            }
    
        }
    
    }

} // До этого места, код работает

let arrMore1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9,];
let arrMore1Words = ['', 'Одна', 'Дві', 'Три', 'Чотири', 'Пять', 'Шість', 'Сім', 'Вісім', 'Девять'];

if(arrSum.length = 1){
    for(let t = 0; t < arrMore1.length; t++){
        if(arrSum[0] == arrMore1[t]){
            result.push(arrMore1Words[t]);
            
            break
        }
    }
} // работает

// console.log(`ответ массивом`, result);

if(arrSum[0] == 1){
    result.push('Гривня');
} else if(arrSum[0] > 1 && arrSum[0] <= 4){
    result.push('Гривні');
} else {
    result.push('Гривень');
} // работает

console.log(`ответ массивом`, result);

result = result.join(' ');
console.log(`ответ Строкой`, result);

alert(`(Запит - ${paySum}). Сумма переказу прописом (Тризначного числа) - ${result}`)