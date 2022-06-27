    import {createApp, toHandlers} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"
    import {URLRates, URLCountries} from "./links.js";


    const appConfig = {
        data(){
            return {
                title: 'Exchange Rates',
                date: '',
                arrRate: [],
                arrCountries: [],
                check: 100,
                search: '',
                sort: '',
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
                    arrowClicker: true,
                    elementNumber: '',
                    // imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                    // nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus),
                    infoCountry: {imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                                  nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus)
                                },
                    countryResult: [],          
                }))

                for(let i = 0; i < this.arrRate.length; i++){
                    let result = [];
                    for (let j = 0; j < this.arrRate[i].infoCountry.imageFlag.length; j++){
                        let combo = {url: this.arrRate[i].infoCountry.imageFlag[j], title:this.arrRate[i].infoCountry.nameRus[j]};
                        // console.log(combo);
                        result.push(combo);
                        // console.log(result);
                    }
                    this.arrRate[i].countryResult = result;
                }


                this.arrRate = this.arrRate.map(item => ({
                    ...item,
                    sum: item.infoCountry.nameRus.length
                }))

                console.log(`arrRate`, this.arrRate)
                
                this.arrRate = this.arrRate.sort((a, b) => b.sum - a.sum );
        },

        methods:{
            showArrow(){
                // console.log(this.arrRate);
                console.log(this.search);
                console.log(this.funSearchFilt)
            },

        },

        computed:{
            funSearchFilt(){
                    let sear = this.search.trim().toLowerCase();
    
                    let result = this.arrRate.filter(item => {
                        for(let key in item){
                            if(item[key].toString().toLowerCase().includes(sear) ){
                                return true;
                            }
                            
                        }
    
                    });

                    return result
            }
        }
    }

    const app = createApp(appConfig);
    app.mount('#app');