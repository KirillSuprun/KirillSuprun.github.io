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
    exchangedate: i.exchangedate
}
));

let nameTag = document.querySelector(`h1`);
nameTag.innerHTML = ` Курс валют на ${arrRate[1].exchangedate}р.`;

console.log(`arrRate`, arrRate);

let arrCountries = countries.map(j => ({
    
    nameRus: j.translations.rus.official,
    currencies: j.currencies,
    flags: j.flags.png

}));

console.log(`arrCountries`, arrCountries);

// for(let i = 0; i < arrCountries.length; i++){
//     if(arrCountries[i].currencies != undefined){
//         arrCountries[i].currencies = Object.keys(arrCountries[i].currencies).join('');
//     } else{

//     arrCountries[i].currencies = {};
//    }
// };

for (let i = 0; i < arrCountries.length; i++ ) {
    if (arrCountries[i].currencies == undefined) {
        arrCountries[i].currencies = NaN;
    } 
    arrCountries[i].currencies = Object.keys(arrCountries[i].currencies).join('');
    
}





let arrAnswer = arrRate.slice(0, );
console.log(`arrAnswer`, arrAnswer);


console.log(`arrAnswer.lentgh`, arrAnswer.length);

console.log(`arrCountries.length`, arrCountries.length);



        
//         arrCountries[j].currencies = arrCountries[j].currencies.toString();
//         console.log(arrCountries[j].currencies `arrCountries[j].currencies.toString();`);

//         if (arrCountries[j].currencies !== undefined){
//             console.log(`work!`);
//             ;
//         } 
//     }
// }




console.log(`arrAnswer`, arrAnswer);


cardsForRate.innerHTML = arrAnswer.map(answer  => `<div class="p-2 "> <div id="" class="card   text-center">
                                                <div class="card-body bgbg shadow">
                                                <h5 class="card-title fs-2"> ${answer.txt}, ${answer.cc} </h5>
                                                <p class="card-text fs-4"> Курси валют: ${(Math.round(answer.rate*100))/100}грн. </p>
                                                <p  class="card-text text-center fs-4"> Країни, де використовують:  </p>
                                                        <p class="card-text text-center d-flex justify-content-center row row-cols-3  row-cols-md-4 row-cols-lg-6 m-2"> 
                                                        
                                                ${arrCountries.filter(pos => pos.currencies.includes(answer.cc)).map(j => `
                                                 <img title="${j.nameRus}" src="${j.flags}" alt="" class="p-1 shadow"> `).join('')}
                                                        
                                                        </p>
                                                 </div>
                                                 </div> </div>`)
                                                 .join();













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
