
const URL = `https://fakestoreapi.com/products`;

// https://fakestoreapi.com/products
// `https://fakestoreapi.com/products?limit=99`


let storeCatalog = await fetch(URL);
    storeCatalog = await storeCatalog.json();

    console.log(storeCatalog);

let arrStoreCatalog = storeCatalog.map(i => ({
        
    title: i.title,
    description: i.description,
    image: i.image,
    price: i.price

}  ) );

console.log(arrStoreCatalog);

let catalogList = document.getElementById(`catalog`);

catalogList.innerHTML = arrStoreCatalog.map(products => `<div class="p-3" > <div class="card text-center ">
                                                        <img src="${products.image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                        <h5 class="card-title text-center fw-400 fs-3"> ${products.title} </h5>
                                                        <p class="card-text text-center aboutText">${products.description}</p>
                                                        <div class="price my-3 text-danger text-center fs-4"> ${products.price}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                                        <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                                        </div>
                                                        </div>

                                                        </div>

                                        
                                                        `

                                                        

    
    ).join('');


    let arrPriceFilter = arrStoreCatalog.slice(0, );
    
    // for(let j = 0; j < arrPriceFilter.length - 2; j++){

    //     for(let i = 0; i < arrPriceFilter.length - 1 - j; i++){
            
    //         if(arrPriceFilter[i].price > arrPriceFilter[i+1].price){
                
    //             let temp = arrPriceFilter[i];
    //             arrPriceFilter[i] = arrPriceFilter[i +1];
    //             arrPriceFilter[i + 1] = temp; 
    //         }

            
    //     }
    // }



let filter1WithUot = exampleRadios1;
let filter2Up = exampleRadios2;
let filter3Down = exampleRadios3;

filter2Up.addEventListener(`click`, function(){

    for(let j = 0; j < arrPriceFilter.length - 1; j++){

        for(let i = 0; i < arrPriceFilter.length - 1 - j; i++){
            
            if(arrPriceFilter[i].price > arrPriceFilter[i+1].price){
                
                let temp = arrPriceFilter[i];
                arrPriceFilter[i] = arrPriceFilter[i +1];
                arrPriceFilter[i + 1] = temp; 
            }

            
        }
    }

    console.log(`arrPriceFilter`, arrPriceFilter);

    catalogList.innerHTML = arrPriceFilter.map(products => `<div class="p-3" > <div class="card text-center ">
                                                        <img src="${products.image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                        <h5 class="card-title text-center fw-400 fs-3"> ${products.title} </h5>
                                                        <p class="card-text text-center aboutText">${products.description}</p>
                                                        <div class="price my-3 text-danger text-center fs-4"> ${products.price}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                                        <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                                        </div>
                                                        </div>

                                                        </div>

                                        
                                                        `

                                                        

    
    ).join('');
    // catalogList.className = `row row-cols-sm-1 row-cols-md-2 row-cols-lg-3`
})

filter3Down.addEventListener(`click`, function(){

    for(let j = 0; j < arrPriceFilter.length - 2; j++){

        for(let i = 0; i < arrPriceFilter.length - 1 - j; i++){
            
            if(arrPriceFilter[i].price > arrPriceFilter[i+1].price){
                
                let temp = arrPriceFilter[i];
                arrPriceFilter[i] = arrPriceFilter[i +1];
                arrPriceFilter[i + 1] = temp; 
            }

            
        }
    }

    arrPriceFilter.reverse();

    console.log(`arrPriceFilter`, arrPriceFilter);

    catalogList.innerHTML = arrPriceFilter.map(products => `<div class="p-3" > <div class="card text-center ">
                                                        <img src="${products.image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                        <h5 class="card-title text-center fw-400 fs-3"> ${products.title} </h5>
                                                        <p class="card-text text-center aboutText">${products.description}</p>
                                                        <div class="price my-3 text-danger text-center fs-4"> ${products.price}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                                        <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                                        </div>
                                                        </div>

                                                        </div>

                                        
                                                        `

                                                        

    
    ).join('');

    // catalogList.className = `d-flex flex-row-reverse row-reverse-cols-3`
})
// <!-- row row-cols-sm-1 row-cols-md-2 row-cols-lg-3  -->
// catalogList.className = `flex-row-reverse row-sm-reverse-cols-1 row-md-reverse-cols-2 row-lg-reverse-cols-3`


filter1WithUot.addEventListener(`click`, function(){

    catalogList.innerHTML = arrStoreCatalog.map(products => `<div class="p-3" > <div class="card text-center ">
                                                        <img src="${products.image}" class="card-img-top" alt="...">
                                                        <div class="card-body">
                                                        <h5 class="card-title text-center fw-400 fs-3"> ${products.title} </h5>
                                                        <p class="card-text text-center aboutText">${products.description}</p>
                                                        <div class="price my-3 text-danger text-center fs-4"> ${products.price}$ <span class=" text-muted text-decoration-line-through" > </span> </div>
                                                        <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                                        </div>
                                                        </div>

                                                        </div>

                                        
                                                        `

                                                        

    
    ).join('');
    // catalogList.className = `row row-cols-sm-1 row-cols-md-2 row-cols-lg-3`
})













//     let arrPriceFilter = arrStoreCatalog.slice(0, );
    
//     for(let j = 0; j < arrPriceFilter.length - 2; j++){

//         for(let i = 0; i < arrPriceFilter.length - 1 - j; i++){
            
//             if(arrPriceFilter[i].price > arrPriceFilter[i+1].price){
                
//                 let temp = arrPriceFilter[i];
//                 arrPriceFilter[i] = arrPriceFilter[i +1];
//                 arrPriceFilter[i + 1] = temp; 
//             }

            
//         }
//     }

// console.log(`arrPriceFilter`, arrPriceFilter);

