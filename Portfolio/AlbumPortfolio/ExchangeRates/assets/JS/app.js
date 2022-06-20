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
                    imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                    nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus),
                    // infoCountry: {imageFlag: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.imageFlag),
                    //     nameRus: this.arrCountries.filter(i => i.currencies.includes(item.cc)).map(j => j.nameRus)
                    //             }           
                })),

                this.arrRate = this.arrRate.map(item => ({
                    ...item,
                    sum: item.nameRus.length
                }))

                console.log(this.arrRate)
                
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

                    console.log(sear);

                    if(this.sort == 'up'){
                        result.sort((a, b) => a.cc - b.cc);
                    } else if(this.sort == 'down'){
                        result.sort((a, b) => b.cc - a.cc);
                    }
    
                    return result
            }
        }
    }

    const app = createApp(appConfig);
    app.mount('#app');