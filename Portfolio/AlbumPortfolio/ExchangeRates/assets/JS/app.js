
    import {createApp} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"
    import {URLRates, URLCountries} from "./links.js";


    const appConfig = {
        data(){
            return {
                title: 'Exchange Rates',
                date: '',
                arrRate: [],
                arrCountries: [],
                check: 100,
            }
        },

        async mounted() {
            let rates = await fetch(URLRates);
                rates = await rates.json();

                rates = rates.map(item => ({
                    ...item,
                    rate: (Math.round(item.rate*100))/100
                }))

            this.date = rates[1].exchangedate;

            console.log(`rates`, rates);

            // this.arrRate = rates;

            let countries = await fetch(URLCountries);
                countries = await countries.json();
            console.log(`countries`, countries);

                countries = countries.map(item => ({
                nameRus: item.translations.rus.common,
                imageFlag: item.flags.png,
                currencies: item.currencies,
        })) 

            for (let i = 0; i < countries.length; i++ ) {
                if (countries[i].currencies == undefined) {
                    countries[i].currencies = NaN;
                } 
                countries[i].currencies = Object.keys(countries[i].currencies).join(''); 
        }
        
            this.arrCountries = countries;

                console.log(this.arrCountries);

                this.arrRate = rates.map(item => ({
                    ...item,
                    imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                    nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus),
                    // infoCountry: {imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                    //     nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus)
                    //             }           
                  
                })),
                console.log(this.arrRate)
                
                this.arrRate = this.arrRate.sort((a, b) => a.nameRus - b.nameRus);

                console.log(this.arrRate[0].nameRus[0])
        },

        methods:{
            
        }
    }

    const app = createApp(appConfig);
    app.mount('#app');