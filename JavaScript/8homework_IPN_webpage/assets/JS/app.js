
    import {createApp} from "https://unpkg.com/vue@3.2.31/dist/vue.esm-browser.js";

    const appConfig = {
        data(){
            return{
                check: 'check3355',
                inn: '',
                arrInn: [],
            }
        },
        
        computed: {
            arrINN(){
                let arrInn = this.inn.toString();
                arrInn = arrInn.split('');
            

                return arrInn;
            },



        }
        
    }

    

    const app = createApp(appConfig);
    app.mount('#app');