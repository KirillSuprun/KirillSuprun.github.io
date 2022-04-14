
    import {createApp} from "../../node_modules/vue/dist/vue.esm-browser.prod.js"

    const URL = "../../dataPB.json"
    
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
                console.log(`data`, data)
        },
        
        computed: {
           


        }

    }

    const app = createApp(appConfig);
    app.mount('#app');

    
    