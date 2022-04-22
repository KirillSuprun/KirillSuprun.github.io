
    const CardShop = {
        data(){
            return {
                quantity: 0,
            }
        },

        props: ['card'],
        // props: ['name', 'img', 'price', 'elementNumber', 'descrip', 'cost'],

        methods: {
            belowZero(){
                if(this.quantity > 0){
                    this.quantity = 0;
                }
                return this.quantity
            }
        },

        template: `
                    <div class="p-3" > 
                        <div class="card text-center ">
                            <img :src=card.image class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center fw-400 fs-3"> {{card.title}} </h5>
                                <p class="card-text text-center aboutText"> {{card.description}}  </p>
                                <div class="price my-3 text-danger text-center fs-4"> {{card.price}}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                <button @click="quantity++" type="button text-center" class="btn btn-dark"> Add </button> <button :class="{
                                    'disabled': (quantity <= 0),
                                    'actived': (quantity >= 0)
                                 }" @click="quantity--" type="button text-center" class="btn btn-dark"> Remove </button>
                                <div>
                                    <input class="mt-2"  v-model="quantity" min="0" type='number'> шт.
                                </div>
                                </div>
                        </div>
                    </div>
                    `,
        
        
    }

    export {CardShop};
