// let sum = 0;


// function solution(number){
//   if(number >= 0){
//     for (let i = 0; i < number; i++){ 
//       if(i % 3 === 0 || i % 5 === 0){
//         sum += i;
//         console.log(`number tu sum ${i}`);
//       } 
   
  
//     } 
//   } else {
//     sum = 0;
    
//   }
//   return sum
// }

// let x = +prompt(`Введите число`)

// let result = solution(x);
// console.log(`result ${result}`);

// console.log(`SUM ${sum}`);

// let sum = 0;

// function solution(number){
    
//     if(number <= 0){
//       sum = 0;
//       return sum;
//     } else {
//         for(let i = 0; i < number; i++){
//           sum = sum + ((i % 3 == 0 || i % 5 == 0) ? i : 0);  
//           console.log(`number i = ${i}`);
//           console.log(`sum = ${sum}`);
//         }
//       return sum;
//     }
//   }

//   let result = solution(101);
 
//   console.log(`result ${result}`);

//  console.log(`SUM ${sum}`);

let numbers = 111234768;
console.log(`Без превращений`, numbers);

numbers = numbers.toString();
console.log(`toSring`, numbers);


let arrPhone = [];
console.log(`arrPhone`, arrPhone)


function createPhoneNumber(numbers){
   arrPhone = numbers.split('');
   console.log(`arrPhone`, arrPhone)
}

console.log(arrPhone);
