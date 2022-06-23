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
                                                 .join('');

