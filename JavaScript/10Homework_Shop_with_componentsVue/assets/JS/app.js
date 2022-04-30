
    import { createApp } from "../../node_modules/vue/dist/vue.esm-browser.prod.js";
    const URL = 'https://fakestoreapi.com/products';
    import { CardShop } from "./components/cardShop.js";

    // var fa = require("fontawesome");
    // console.log(fa("fort-awesome") + " Hello World!"); // Hello World!
    // console.log(fa.fortAwesome + " Hello World!"); // Hello World!

    const appConfig = {
        data(){
            return{
                title: 'Candy Shop',
                list: [],
                sort: null,
                search: '',
            }
        },

        
        async mounted(){
            let data = await fetch(URL);
                data = await data.json();

                data = data.map(item => ({...item, quantity: 0}))

            this.list = data;
            console.log(`this.list`, this.list);
        },

        methods:{
            changeQuantity(newQuantity, i){
                console.log(`recieve`, newQuantity, i)
                this.list[i].quantity = newQuantity;
                console.log(`list`, this.list);
            },

            clear(){
                for(let item in this.list){
                    this.list[item].quantity = 0;
                }
            },
        },

        computed: {
            filtrPrice(){
                let sear = this.search.trim().toLowerCase();

                let result = this.list.filter(item => {
                    for(let key in item){
                        if(item[key].toString().toLowerCase().includes(sear) ){
                            return true;
                        }
                        
                    }

                });

                if(this.sort == 'up'){
                    result.sort((a, b) => a.price - b.price);
                } else if(this.sort == 'down'){
                    result.sort((a, b) => b.price - a.price);
                }

                return result
            },

            amount(){
                return this.list.reduce((acc, item) => acc + item.quantity, 0)
            },

            totalCost(){
                return this.list.reduce((acc, item) => acc + item.price * item.quantity, 0).toFixed(2);
            },
        },

        

        
        components: {
            'card-shop': CardShop,
        }
    }

    const app = createApp(appConfig);
    app.mount('#app');