
    import {createApp} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"

    const URL = "../../dataPB.json"
    const rateURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'
    
    // let data = await fetch(URL);
    //     data = data.json()


    const appConfig = {
        data(){
            return {
                title: "Русский корабль иди",
                dateOneStart: '',
                dateOneEnd: '',
                dateTwoStart: '',
                dateTwoEnd: '',
            }
        },

        async mounted(){
            let data = await fetch(URL);
                data = await data.json();
                console.log(`data`, data);

            let rates = await fetch(rateURL);
                rates = await rates.json();
                console.log(`rates`, rates);

            let usd;
            let eur;

            for(let i of rates){
                if(i.cc == 'USD'){
                    usd = i.rate;
                } else if (i.cc == 'EUR'){
                    eur = i.rate;
                }
            }

            console.log(`usd`, usd, `eur`, eur);

            // let x = 2022-02-22 > 2022-02-23
            //     console.log(`x`, x);

            data = data.map (i => {
                if(i.valcode == 'USD'){
                    let attraction1 = Math.round((i.attraction * usd)*100)/100;
                    return ({...i, attraction:attraction1})

                } else if(i.valcode == 'EUR'){
                   let attraction1 = Math.round((i.attraction * eur)*100)/100;
                   return ({...i, attraction:attraction1})
                } else {
                    let attraction1 = Math.round(i.attraction*100)/100;
                    return ({...i, attraction:attraction1})
                }
            });



            console.log(`data`, data);

            let dataSh = data.map(i => ({
                paydate: i.paydate,
                repaydate: i.repaydate,
                // valcode: i.valcode,
                
            })
            )
        },
        
        computed: {
           


        }

    }

    const app = createApp(appConfig);
    app.mount('#app');

    
    