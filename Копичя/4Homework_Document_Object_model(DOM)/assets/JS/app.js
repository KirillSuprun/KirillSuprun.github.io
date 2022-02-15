
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const URL2 = 'https://restcountries.com/v3.1/all';

let dataRate = await fetch(URL);
    dataRate = await dataRate.json();
    // dataRate = dataRate;

let countries = await fetch(URL2);
    countries = await countries.json();
    // сountries = сountries;

console.log(`Курсы`, dataRate);
console.log(`Страны`, countries);

// достаем данные из JSON файлов

let cardsForRate = spaceForCards; // cardsForRate = document.getElementById(`spaceForCards`);
console.log(cardsForRate);

let flags1 = ''
let counter = 0;

let arrRate = dataRate.map(i => ({
    txt: i.txt,
    cc: i.cc,
    rate: i.rate,
    flags: [],
    nameOff: [],
}
));


console.log(`arrRate`, arrRate);

let arrCountries = countries.map(j => ({
    
    nameRus: j.translations.rus.official,
    currensies: j.currencies,
    flags: j.flags.png

}));

console.log(`arrCountries`, arrCountries);



let arrAnswer = arrRate.slice(0, );
console.log(`arrAnswer`, arrAnswer);


console.log(`arrAnswer.lentgh`, arrAnswer.length);

console.log(`arrCountries.length`, arrCountries.length);


for (let i = 0; i < arrAnswer.length; i++) {
    // console.log(`arrAnswer[i].cc`, `${arrAnswer[i].cc}`)
    for (let j = 0; j < arrCountries.length; j++) {
        // console.log(`${arrCountries[j].nameRus}`);
        // console.log(`arrCountries[j].currencies`, arrCountries[j].currensies, j)
        
        arrCountries[j].currencies = arrCountries[j].currencies.toString();
        console.log(arrCountries[j].currencies `arrCountries[j].currencies.toString();`);
       

        // arrAnswer[i].flags.push(`${arrCountries[j].flags}`);
        //     arrAnswer[i].nameOff.push(`${arrCountries[j].nameRus}`);  // работает. Осталось только сравнить... 

        // let x = (arrCountries[j].currencies !== undefined)
        // console.log(`x`, x)

        if (arrCountries[j].currencies !== undefined && `${arrAnswer[i].cc}` in arrCountries[j].currensies){
            console.log(`work!`);
            arrAnswer[i].flags.push(`${arrCountries[j].flags}`);
            arrAnswer[i].nameOff.push(`${arrCountries[j].nameRus}`);
        } 
    }
}






console.log(`arrAnswer`, arrAnswer);


// cardsForRate.innerHTML = dataRate.map((rates) => `<div id="" class="card text-center">
//                                                 <div class="card-body">
//                                                 <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
//                                                 <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
//                                                 <p class="card-text"> Країни, де використовують:  </p>
//                                                 <p class="card-text"> 
                                            
//                                                         </p>
//                                                 // </div>
//                                                 // </div>` 
                                                
                                                
//                                                 // for(let i = 0; i < flagsPNG.lenght; i++){
                                                
                                                
//                                                 ).join();


// const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
// const URL2 = 'https://restcountries.com/v3.1/all';

// let dataRate = await fetch(URL);
//     dataRate = await dataRate.json();
//     // dataRate = dataRate;

// let countries = await fetch(URL2);
//     countries = await countries.json();
//     // сountries = сountries;

// console.log(`Курсы`, dataRate);
// console.log(`Страны`, countries);

// // достаем данные из JSON файлов

// let cardsForRate = spaceForCards; // cardsForRate = document.getElementById(`spaceForCards`);
// console.log(cardsForRate);

// let flags1 = '';
// let counter = 0
// let flagString = '';

// cardsForRate.innerHTML = dataRate.map((rates) => `<div id="" class="card text-center">
//                                                 <div class="card-body">
//                                                 <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
//                                                 <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
//                                                 <p class="card-text"> Країни, де використовують:  </p>
//                                                 <p id="${rates.cc}" class="card-text"> ${countries.map((flagsPNG) => {
//                                                                        console.log(flagString = flagsPNG.stringify(flagsPNG.currencies));

//                                                     /* flags1 = ''; */ console.log(flagsPNG.currencies == rates.cc)
//                                                     if(flagsPNG.currencies == rates.cc){ 
//                                                     counter++
//                                                     console.log(counter);
//                                                     console.log(flags1);
//                                                     flags1 += ' ' + flagsPNG.flags.png;  
//                                                     return "<img src="+ flags1 + ' alt=""' } 
//                                                     else { return flags1}  }) }
                                                     
                                                        
//                                                         </p>
//                                                 // </div>
//                                                 // </div>` 
                                                
                                                
//                                                 // for(let i = 0; i < flagsPNG.lenght; i++){
                                                
                                                
//                                                 ).join();

// ///////////////////////////////////////////////////////////////////////////////////////////////// Добавили карточку, кроме флагов

// // ${countries.map((flagsPNG) => {
// //     flags1 = '';
// //     if(flagsPNG.currencies = rates.cc){ 
// //     console.log(flags1)
// //     flags1 += ' ' + flagsPNG.flags.png  
// //     return flags1  }}) } 




// // let flags;
// // --------------------------
// // flags.innerHTML = сountries.map((flagsPNG) => {
//                                                     //     if(rates.cc == flagsPNG.currencies){
                                            
//                                                     //             flags += `<img src="${flags.png}" alt=""></img>`;
//                                                     //             return flags
//                                                     //         }
                                                            
//                                                     //      }
//                                                     //   )} 
// // ---------------------------

// // let flags = rates.cc;
// // console.log(`forFlag`, forFlag);

// // flags.insertAdjacentElement(position, element)
// // let flags = rate.cc

// // flags.insertAdjacentElement(beforeEnd, `<img src="${flags.png}" alt=""></img>`) = сountries.map((flagsPNG) => {
// //     if(rates.cc == flagsPNG.currencies){
     
// //      }
// //   })

