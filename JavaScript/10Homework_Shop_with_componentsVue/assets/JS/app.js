
    import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";
    const URL = 'https://fakestoreapi.com/products';
    import { CardShop } from "./components/cardShop.js";

    // var fa = require("fontawesome");
    // console.log(fa("fort-awesome") + " Hello World!"); // Hello World!
    // console.log(fa.fortAwesome + " Hello World!"); // Hello World!

    const appConfig = {
        data(){
            return{
                title: 'Candy Shop1',
                list: []
            }
        },

        async mounted(){
            let data = await fetch(URL);
                data = await data.json();

            this.list = data;
            console.log(`this.list`, this.list);
        },

        components: {
            'card-shop': CardShop,
        }
    }

    const app = createApp(appConfig)
    app.mount('#app')