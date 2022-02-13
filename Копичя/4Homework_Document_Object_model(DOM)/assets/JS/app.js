
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



let arrResult = [];
arrResult = dataRate.map((item ) => {
    console.log(item.txt);
    arrResult = arrResult.push(item.txt);
    arrResult = arrResult.push(item.cc);
    arrResult = arrResult.push(item.rate);
}
)

console.log(`arrResult`, arrResult);











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


