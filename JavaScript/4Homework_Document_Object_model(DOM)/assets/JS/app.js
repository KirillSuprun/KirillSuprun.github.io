
const URL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json';
const URL2 = 'https://restcountries.com/v3.1/all';

let dataRate = await fetch(URL);
    dataRate = await dataRate.json();
    // dataRate = dataRate;

let сountries = await fetch(URL2);
    сountries = await сountries.json();
    // сountries = сountries;

console.log(`Курсы`, dataRate);
console.log(`Страны`, сountries);

// достаем данные из JSON файлов

let cardsForRate = spaceForCards; // cardsForRate = document.getElementById(`spaceForCards`);
console.log(cardsForRate);

let flags = 0;

cardsForRate.innerHTML = dataRate.map(rates => `<div id="${rates.cc}" class="card text-center">
                                                <div class="card-body">
                                                <h5 class="card-title"> ${rates.txt}, ${rates.cc} </h5>
                                                <p class="card-text"> Курси валют: ${(Math.round(rates.rate*100))/100}грн. </p>
                                                <p class="card-text"> Країни, де використовують:  </p>
                                                <p class="card-text">${countries.map(flags, item) =>
                                                                       if(rates.cc == flags.currencies){
                                                                          flags = rates.cc
                                                                          flags.insertAdjacentElement(beforeEnd, );
                                                                       } 
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                    
                                                                        )  }  </p>
                                                </div>
                                                </div>`
                                                
                                                
                                                
                                                
                                                
                                                ).join();

///////////////////////////////////////////////////////////////////////////////////////////////// Добавили карточку, кроме флагов

let flags;



let flags = rates.cc;
console.log(`forFlag`, forFlag);

// flags.insertAdjacentElement(position, element)