
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

// flags = countries.map(flagsPNG =>
// console.log(`kartinka`, flagsPNG.flags.png)
// )
let counter = 0;
let flagsString;
let clearFlags;

cardsForRate.innerHTML = dataRate.map((rates) => `<div id="" class="card text-center">
                                                <div class="card-body">
                                                <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
                                                <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
                                                <p class="card-text"> Країни, де використовують:  </p>
                                                <p id="${rates.cc}" class="card-text"> ${countries.map((flagsPNG) => {
                                                    /* flags1 = ''; */
                                                    console.log(`rates.cc`, rates.cc);
                                                    flagsString = JSON.stringify(flagsPNG.currencies).split(':')
                                                    console.log(`flagsPNG.currencies`, flagsString); 

                                                    clearFlags = flagsString.replace(/[^a-zа-яё]/gi, '');
                                                    console.log(`flagsPNG.currencies`, flagsString); 

                                                    console.log(`stirng`, flagsPNG.currencies)
                                                    return
                                                } )}
                                                     
                                                        
                                                        </p>
                                                // </div>
                                                // </div>` 
                                                
                                                
                                                // for(let i = 0; i < flagsPNG.lenght; i++){
                                                
                                                
                                                ).join();


// console.log(`flagsPNG.currencies`, JSON.stringify(flagsPNG.currencies).split(':')) 

///////////////////////////////////////////////////////////////////////////////////////////////// Добавили карточку, кроме флагов

// ${countries.map((flagsPNG) => {
//     flags1 = '';
//     if(flagsPNG.currencies = rates.cc){ 
//     console.log(flags1)
//     flags1 += ' ' + flagsPNG.flags.png  
//     return flags1  }}) } 





// countries.map((flagsPNG) => {
//     counter++
//     console.log(counter);
//     console.log(flags1);
//     flags1 += ' ' + flagsPNG.flags.png;  
//     return "<img src="+ flags1 + ' alt=""' }
//     );



    
// cardsForRate.innerHTML = dataRate.map((rates) => { countries.map((flagsPNG) => {
//                                                         if(flagsPNG.cc = rates.cc){ console.log(flagsPNG.cc)
//                                                             return `<div id="" class="card text-center">
//                                                             <div class="card-body">
//                                                             <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
//                                                             <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
//                                                             <p class="card-text"> Країни, де використовують:  </p>
//                                                             <p id="${rates.cc}" class="card-text"> 
//                                                                 ${flagsPNG.flags.png}
//                                                                   </p>
//                                                             // </div>
//                                                             // </div>` 
//                                                         } else {
//                                                 return `<div id="" class="card text-center">
//                                                 <div class="card-body">
//                                                 <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
//                                                 <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
//                                                 <p class="card-text"> Країни, де використовують:  </p>
//                                                 <p id="${rates.cc}" class="card-text"> 

//                                                       </p>
//                                                 // </div>
//                                                 // </div>`
//                                                         }   
                                                 
                                                

//                                                 // for(let i = 0; i < flagsPNG.lenght; i++){
                                                
                                                
//                                                     })} );

///////////////////////////////////////////////////////////////////////////////////////////////// Добавили карточку, кроме флагов

// let flags;
// --------------------------
// flags.innerHTML = сountries.map((flagsPNG) => {
                                                    //     if(rates.cc == flagsPNG.currencies){
                                            
                                                    //             flags += `<img src="${flags.png}" alt=""></img>`;
                                                    //             return flags
                                                    //         }
                                                            
                                                    //      }
                                                    //   )} 
// ---------------------------

// let flags = rates.cc;
// console.log(`forFlag`, forFlag);

// flags.insertAdjacentElement(position, element)
// let flags = rate.cc

// flags.insertAdjacentElement(beforeEnd, `<img src="${flags.png}" alt=""></img>`) = сountries.map((flagsPNG) => {
//     if(rates.cc == flagsPNG.currencies){
     
//      }
//   })

