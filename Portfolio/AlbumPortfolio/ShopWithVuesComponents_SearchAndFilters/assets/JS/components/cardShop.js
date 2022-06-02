
    const CardShop = {
        data(){
            return {
                quantity: this.card.quantity,
                search: '',
            }
        },

        props: ['card', 'cardNumber', 'card.quantity'],
        // props: ['name', 'img', 'price', 'elementNumber', 'descrip', 'cost'],

        methods: {
            belowZero(){
                if(this.quantity > 0){
                    this.quantity = 0;
                }
                console.log(this.search);
                return this.quantity
            }
        },
        
        watch:{
            quantity(newValue, oldValue){
                this.$emit('quantity-change', this.quantity, this.cardNumber); 
                console.log(this.card.quantity)
            }
        },

        template: `
                    <div class="p-3" > 
                        <div  class="card text-center ">
                            <img :src=card.image class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center fw-400 fs-3"> {{card.title}} </h5>
                                <p class="card-text text-center aboutText" > {{card.description}}  </p>
                                <div class="card-price price my-3 text-danger text-center fs-4"> {{card.price}}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                <div class="card-buttons">
                                    <button @click="card.quantity++" type="button text-center" class="btn btn-dark"> Add </button> <button :class="{
                                        'disabled': (card.quantity <= 0),
                                        'actived': (card.quantity >= 0)
                                    }" @click="card.quantity--" type="button text-center" class="btn btn-dark"> Remove </button>
                                </div>
                                <div class="card-quantity" @quantity-change="changeQuantity">
                                    <input class="mt-2"  v-model="card.quantity" min="0" type='number'> шт.
                                </div>
                            </div>
                        </div>
                    </div>
                  `,
        
        
    }

    export {CardShop};
