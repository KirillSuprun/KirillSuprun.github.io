

	let data = "Pellentesque ex eros, +380665433321 porttitor eu bibendum ac, aliquam tincidunt urna. Mauris tristique lobortis orci, nec varius magna convallis interdum. Etiam 5363 4567 8765 3454 pharetra tempor ex, vel eleifend (067) 678 44 21 odio lacinia (0562) 35-30-38 eget. Morbi maximus libero vitae aliquet facilisis. Vivamus 5674-2346-8945-0012 vitae quam nisi. Quisque 12/45 quis venenatis 5192722517688913 lacus. Sed ac lorem (050)567-45-33 nec leo pharetra 4556796335044346 dapibus sed eu +38067432112 ex. In hac 4913-8185-2881-4543  habitasse platea dictumst. In dignissim 5461158320267908 suscipit rutrum. Ut 4916 8494 1754 2904 luctus  sapien in risus 56th street auctor, ac placerat 067-678-44-21  quam malesuada. Pellentesque (056) 7783322 bibendum justo  5363 4567 87653 3455 tempus purus convallis, a viverra nunc ullamcorper. Nulla 5213 9203 2475 5355 eget lectus gravida, porta eros vitae, semper erat +39-926-1234567.  Aenean volutpat vehicula dui ut pharetra.";
	
    // 5363 4567 8765 3454
    // 5674-2346-8945-0012
    // 5192722517688913
    // 4556796335044346
    // 4913-8185-2881-4543
    // 5461158320267908
    // 4916 8494 1754 2904
    // 5363 4567 87653 3455
    // 5213 9203 2475 5355
    // 9 штук 
	/*
		
	Необходимо выбрать !!валидные!! номера банковских карт и вывести их в формате 4 блока по 4 цифры.
	
	Например:
	
	5475 0330 3843 6453
	4539 1799 4927 2557
	...
	
	*/
    
         // ^[\d]{4}[\ \-]?[\d]{4}[\ \-]?[\d]{4}[\ \-]?[\d]{4}[\ \-]?$     
         // [\d]{4}[\ \-]?[\d]{4}[\ \-]?[\d]{4}[\ \-]?.
         // ([\d]{4}[\ \-]?){3}.
    let finder = /([\d]{4}[\ \-]?){3}[\d]?[\ \-]?[\d]{4}?/g;

    let arrResult = data.match(finder);
    console.log(`arrResult`, arrResult);

    let objResult = {};

// Убираем пробелы и тире 
    for(let i = 0; i < arrResult.length; i++){
        arrResult[i] = arrResult[i].replace(/\D/g, '');
        objResult[i] = arrResult[i];
    }
// Убираем пробелы и тире 
    

    console.log(`arrResult`, arrResult);
    console.log(`objResult`, objResult);


    let arrCard = ``;
// --------- Начало функции -----------------//  
    function splitAndCheck(CardF){
        let card = CardF;
        arrCard =  card.split('')
                
        
        let arrFirstSix = arrCard.slice(0,6);
       
        
        let FirstSix = +arrFirstSix.join('');
        
            

        // ----------------------------------------------------- Выделяем первые 6 цифр в массив и в строку перед превращением массива

        let arrCardReverse = arrCard.reverse().map(i => +i);
        

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

        console.log(arrCard[0]);

        // -------------------------------------------------------------- Выделяем 2 цифры в масив и строку 
        let arrFirstTwo = arrFirstSix.slice(0,2);
        

        let FirstTwo = +arrFirstTwo.join('');
        
        // -------------------------------------------------------------- Выделяем 2 цифры в масив и строку 


            // Maestro (5018, 5020, 5038, 5893, 6304, 6759, 6761, 6762, 6763, 0604)
        // -------------------------------------------------------------- Выделяем 4 цифры в масив и строку
        let arrFirstFour = arrFirstSix.slice(0, 4); 
       

        let FirstFourString = arrFirstFour.join('');
        let FirstFour = +FirstFourString
       
        // -------------------------------------------------------------- Выделяем 4 цифры в масив и строку


        // ----------------------------------- Метод для сплита по 4 цифры 
        let spliiit = (splitCardNumber, NumberOfSplit) => splitCardNumber.length ? [splitCardNumber.slice(0, NumberOfSplit), ...spliiit(splitCardNumber.slice(NumberOfSplit), NumberOfSplit)] : [];
        // ----------------------------------- Метод для сплита по 4 цифры 


        // Visa
        if(card.length >= 13 && card.length <= 19 
            &&  
            arrFirstSix[0] == 4 
            && 
            isCorrect == true){
                
            CardF = spliiit(card, 4);
            console.log(`CardF`,CardF);

            CardF = CardF.join(` `) + ` - карта платежной системы VISA` ;
            console.log(`CardF`,CardF);

                
        } 
        else // MasterCard 
        if(card.length == 16 
            && 
            ((FirstTwo >=  51 && FirstTwo <= 55) || (FirstSix >= 222100 && FirstSix <= 272099))
            && 
            isCorrect == true){

                CardF = spliiit(card, 4);
            console.log(`CardF`,CardF);

            CardF = CardF.join(` `) + ` - карта платежной системы MasterCard` ;
            console.log(`CardF`,CardF);

                
        } // Maestro
        else 
        if(card.length >= 12 && card.length <= 19
        &&
        (FirstFour == 5018 || FirstFour == 5020 || FirstFour == 5038 || FirstFour == 5893 || FirstFour == 6304 || FirstFour == 6759 || FirstFour == 6761 || FirstFour == 6762 || FirstFour == 6763 || FirstFourString == '0604') 
        &&
        isCorrect == true){

                CardF = spliiit(card, 4);
                console.log(`CardF`,CardF);

                CardF = CardF.join(` `) + ` - карта платежной системы Maestro` ;
                console.log(`CardF`,CardF);

            
        } // Другие платежные системы  
        else 
        if(isCorrect == true && card.length >= 12 && card.length <= 19){

            
                CardF = spliiit(card, 4);
                console.log(`CardF`,CardF);

                CardF = CardF.join(` `) + `- карта валидна. Не относится к платежным системам: Visa, MasterCard, Maestro.` ;
                
        } // неверный ввод карты
        else { 
            return     
        }

      
        return CardF
        
    }
// ------------ Конец функции -----------------// 

let answerString = ``;

for(let j in objResult){
    objResult[j] = splitAndCheck(objResult[j]);
        if(objResult[j] != undefined){
            answerString += `
` + objResult[j];
        }
}
console.log(`objResult`, objResult);

alert(` Список валидных карт из заданого текста:
${answerString}
`);
