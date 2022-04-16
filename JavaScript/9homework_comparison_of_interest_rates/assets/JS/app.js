
    import {createApp} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"

    const URL = "../../dataPB.json"
    const rateURL = 'https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json'

    const appConfig = {
        data(){
            return {
                dateOneStart: '',
                dateOneEnd: '',
                dateTwoStart: '',
                dateTwoEnd: '',
                answer: [],
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
                attraction: i.attraction,
            })
            );

            this.answer = dataSh;

            console.log(`answer`, this.answer)
        },
        
        computed: {
                firstPayDay(){
                let dateOneStart1 = this.dateOneStart.split('-').join('.');
                let dateOneEnd1 = this.dateOneEnd.split('-').join('.');
                let result = 0;

                if(dateOneStart1 && dateOneEnd1){
                        for(let i = 0; i < this.answer.length; i++){
                            if(this.answer[i].paydate.split('.').reverse().join('.') >= dateOneStart1 && this.answer[i].paydate.split('.').reverse().join('.') <= dateOneEnd1){
                                result = result + this.answer[i].attraction;
                            }
                        }
                }

                return Math.round(result / 1000000) // * 100) /100  // приводим к млн. грн. 
            },

            firstRepayDay(){
                let dateOneStart1 = this.dateOneStart.split('-').join('.');
                let dateOneEnd1 = this.dateOneEnd.split('-').join('.');
                let result = 0;
                
                if(dateOneStart1 && dateOneEnd1){
                        for(let i = 0; i < this.answer.length; i++){
                            if(this.answer[i].repaydate.split('.').reverse().join('.') >= dateOneStart1 && this.answer[i].repaydate.split('.').reverse().join('.') <= dateOneEnd1){
                                result = result + this.answer[i].attraction;
                            }
                        }
                }

                return Math.round(result / 1000000) // * 100) /100  // приводим к млн. грн. 
            },

            secondPayDay(){
                let dateTwoStart1 = this.dateTwoStart.split('-').join('.');
                let dateTwoEnd1 = this.dateTwoEnd.split('-').join('.');
                let result = 0;

                if(dateTwoStart1 && dateTwoEnd1){
                        for(let i = 0; i < this.answer.length; i++){
                            if(this.answer[i].paydate.split('.').reverse().join('.') >= dateTwoStart1 && this.answer[i].paydate.split('.').reverse().join('.') <= dateTwoEnd1){
                                result = result + this.answer[i].attraction;
                            }
                        }
                }

                return Math.round(result / 1000000) // * 100) /100  // приводим к млн. грн. 
            },

            secondRepayDay(){
                let dateTwoStart1 = this.dateTwoStart.split('-').join('.');
                let dateTwoEnd1 = this.dateTwoEnd.split('-').join('.');
                let result = 0;

                if(dateTwoStart1 && dateTwoEnd1){
                        for(let i = 0; i < this.answer.length; i++){
                            if(this.answer[i].repaydate.split('.').reverse().join('.') >= dateTwoStart1 && this.answer[i].repaydate.split('.').reverse().join('.') <= dateTwoEnd1){
                                result = result + this.answer[i].attraction;
                            }
                        }
                }

                return Math.round(result / 1000000) // * 100) /100  // приводим к млн. грн. 
            },

            payPercents(){
               if(this.firstPayDay && this.secondPayDay){ 
                    let result = (this.secondPayDay / (this.firstPayDay / 100)) - 100;
                    result = Math.round(result * 100)/100;
                        // if(result > 0){
                        //     result = '+' + result.toString() + '%';
                        // } else if(result < 0){
                        //     result = /*'-'  + */`${result}` + '%';
                        // } else {
                        //     result = `${result}` + '%';
                        // }
                    
                    return result 
               } 
            },

            repayPercents(){
                if(this.firstRepayDay && this.secondRepayDay){ 
                     let result = (this.secondRepayDay / (this.firstRepayDay / 100)) - 100;
                     result = Math.round(result * 100)/100;
                        //  if(result > 0){
                        //      result = '+' + result.toString() + '%';
                        //  } else if(result < 0){
                        //      result = /*'-'  + */`${result}` + '%';
                        //  } else {
                        //      result = `${result}` + '%';
                        //  }
                     
                     return result 
                } 
             },

        }

    }

    const app = createApp(appConfig);
    app.mount('#app');

    
    