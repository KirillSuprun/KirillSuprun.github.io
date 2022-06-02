
    import {createApp} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"
    import {URLRates, URLCountries} from "./links.js";


    const appConfig = {
        data(){
            return {
                title: 'Exchange Rates',
            }
        },

        async mounted() {
            let rates = await fetch(URLRates);
                rates = await rates.json();
            console.log(`rates`, rates);

            let countries = await fetch(URLCountries);
                countries = await countries.json();
            console.log(`countries`, countries);

            

        }
    }

    const app = createApp(appConfig);
    app.mount('#app')