
  let  card = prompt(`Введите номер вашей карты (от 13 до 19 символов, допускается с пробелами, но не с другими символами) -`).toString();
  console.log(card);

  card = card.replace(/\s/g, ''); // Убираем пробелы, если карта скопирована с ними
  console.log(card);

  //let arrCard = card.toString();
  let arrCard = card.split('')
  console.log(`arrcard`,arrCard);
// ------------------------------------------------------ Выделяем первые 6 цифр в массив и в строку перед превращением массива
  let arrFirstSix = arrCard.slice(0,6);
  console.log(`arrFirstSix`, arrFirstSix);
  
  let FirstSix = +arrFirstSix.join('');
  console.log(`FirstSix`, FirstSix);
// ----------------------------------------------------- Выделяем первые 6 цифр в массив и в строку перед превращением массива

  let arrCardReverse = arrCard.reverse().map(i => +i);
  console.log(`arrCardReverse`, arrCardReverse);
  console.log(`arrcard`,arrCard);

  let sum = 0;

  for(let i = 0; i < arrCardReverse.length; i++){
      
      if(i % 2 == 0){
          sum = sum + arrCardReverse[i];  
      } else {
          let double = arrCardReverse[i] * 2;
          sum = sum + (double > 9 ? double - 9 : double); 
      } 
  }   
  console.log(sum);

  let isCorrect = sum % 10 == 0;
  console.log(`Is Correct:`, isCorrect);

// --------------------------------------------------------------- Проверка по Луну

console.log(arrCard[0]);

// -------------------------------------------------------------- Выделяем 2 цифры в масив и строку 
let arrFirstTwo = arrFirstSix.slice(0,2);
console.log(`arrFirstTwo`, arrFirstTwo);

let FirstTwo = +arrFirstTwo.join('');
console.log(`FirstTwo`, FirstTwo);
// -------------------------------------------------------------- Выделяем 2 цифры в масив и строку 


    // Maestro (5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763, 0604)
// -------------------------------------------------------------- Выделяем 4 цифры в масив и строку
let arrFirstFour = arrFirstSix.slice(0, 4); 
console.log(`arrFirstFour`, arrFirstFour);

let FirstFourString = arrFirstFour.join('');
let FirstFour = +FirstFourString
console.log(`FirstFour`, FirstFour);
console.log(`FirstFourString`, FirstFourString);
// -------------------------------------------------------------- Выделяем 4 цифры в масив и строку




// Visa
if(card.length >= 13 && card.length <= 19 
    &&  
    arrFirstSix[0] == 4 
    && 
    isCorrect == true){
         alert(`Заданная карта - ${card} платежной системы VISA`);
         console.log(`Заданная карта - ${card} платежной системы VISA`);
 } 
 else // MasterCard 
   if(card.length == 16 
    && 
    (FirstTwo >=  51 && FirstTwo <= 55) || (FirstSix >= 222100 && FirstSix <= 272099)
    && 
    isCorrect == true){
        alert(`Заданная карта - ${card} платежной системы MasterCard`);
        console.log(`Заданная карта - ${card} платежной системы MasterCard`);
} // Maestro
else 
  if(card.length >= 12 && card.length <= 19
   &&
   (FirstFour == 5018 || FirstFour == 5020 || FirstFour == 5038 || FirstFour == 5893 || FirstFour == 6304 || FirstFour == 6759 || FirstFour == 6761 || FirstFour == 6762 || FirstFour == 6763 || FirstFourString == '0604') 
   &&
   isCorrect == true){
        alert(`Заданная карта - ${card} платежной системы Maestro`);
        console.log(`Заданная карта - ${card} платежной системы Maestro`);
} // Другие платежные системы  
else 
  if(isCorrect == true && card.length >= 12 && card.length <= 19){
        alert(`Заданная карта - ${card} не относится к платежным системам: Visa, MasterCard, Maestro. Карта действительна и относится к другим платежным системам`);
        console.log(`Заданная карта - ${card} не относится к платежным системам: Visa, MasterCard, Maestro. Карта действительна и относится к другим платежным системам`);
} // неверный ввод карты
else {
        alert(`Номер карты - ${card} не существует. Проверьте номер карты и попробуйте еще раз`);
        console.log(`Номер карты - ${card} не существует. Проверьте номер карты и попробуйте еще раз`);
}

