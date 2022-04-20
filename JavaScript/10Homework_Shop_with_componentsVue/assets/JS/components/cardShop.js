
    const CardShop = {
        data(){
            return {
                title: 'Candy Shop'
            }
        },

        template: `
                    <div class="p-3" > 
                        <div class="card text-center ">
                            <img src="" class="card-img-top" alt="...">
                            <div class="card-body">
                                <h5 class="card-title text-center fw-400 fs-3">  </h5>
                                <p class="card-text text-center aboutText"></p>
                                <div class="price my-3 text-danger text-center fs-4"> $ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                </div>
                        </div>
                    </div>
                    `,
        
        
    }

    export {CardShop};
