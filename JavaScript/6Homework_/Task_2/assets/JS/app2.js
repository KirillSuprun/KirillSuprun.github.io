
const URL = `https://fakestoreapi.com/products`;

let storeCatalog = await fetch(URL);
    storeCatalog = await storeCatalog.json();

    console.log(storeCatalog);

let objStoreCatalog = storeCatalog.map(i => ({
        
    title: i.title,
    description: i.description,
    image: i.image,
    price: i.price

}  ) );

console.log(`arrStoreCatalog`, objStoreCatalog);

let catalogList = document.getElementById(`catalog`);

catalogList.innerHTML = objStoreCatalog.map(products => `<div class="top-sizing p-1 mt-4" > 
                                                            <div class="card text-center shadow">
                                                                <img src="${products.image}" class="card-img-top h-25" alt="...">
                                                                <div class="card-body d-flex flex-column">
                                                                    <h5 class="card-title text-center fw-400"> ${products.title} </h5>
                                                                    <p class="flex-grow-1  card-text text-center fs-5 aboutText">${products.description}</p>
                                                                    <div class"d-flex h-25">
                                                                        <div  class="price text-danger fs-4"> ${products.price}$ </div>
                                                                            <button type="button text-center" class="btn btn-dark"> Add to cart</button>
                                                                        </div>
                                                                    </div>
                                                            </div>

                                                        </div>
                                                        `).join('');