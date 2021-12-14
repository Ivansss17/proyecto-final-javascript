//incorporacion de tarjeta de carrito
function addTarjet(){
    compra.innerHTML = '';
      Object.values(carro).forEach(element =>{
        
        let precioC =(element.precio) * (element.cantidad);
        
      $('#productosSelecionados').append(`<div class="row shoppingCartItem">
      <div class="col-6">
          <div class="shopping-cart-item d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <img src="./adjuntos/${element.id}.png" class="shopping-cart-image" width="50px" height="auto">
              <h6 class="shopping-cart-item-title shoppingCartItemTitle text-truncate ml-3 mb-0">${element.title}
              </h6>
          </div>
      </div>
      <div class="col-2">
          <div class="shopping-cart-price d-flex align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0 shoppingCartItemPrice">${precioC}</p>
          </div>
      </div>
      <div class="col-4">
          <div
              class="shopping-cart-quantity d-flex justify-content-between align-items-center h-100 border-bottom pb-2 pt-3">
              <p class="item-price mb-0 shoppingCartItemPrice">${element.cantidad}</p>
              <button data-id="${element.id}"type="button" class="btn btn-primary">+</button>
              <button data-id="${element.id}"type="button" class="btn btn-danger btnMenos">-</button>
              <button data-id="${element.id}"class="btn btn-danger buttonDelete" type="button">X</button>
          </div>
      </div>
  </div>`);
      })
      totalP()
      localStorage.setItem('carrito', JSON.stringify(carro));
    }

      
      
// calculo total y cantidades
const totalP = () => {
    totalCant.innerHTML = '';
   
    const sumaCant = Object.values(carro).reduce((acc, {cantidad}) => acc + cantidad, 0);
    const sumaPrecio = Object.values(carro).reduce((acc, {cantidad, precio}) => acc + cantidad * precio, 0);
    $('#totalCant').append(`<p class="ml-4 mb-0 shoppingCartTotal">$:${sumaPrecio}</p>`) ;
    console.log(sumaPrecio)
    console.log(sumaCant)
    if (sumaPrecio === 0){
        $('.shopping-cart').fadeOut();
    }else{
        $('.shopping-cart').fadeIn();
    }
}


// funcion de teclas del carrito
const btnmas = (e) => {
    if (e.target.classList.contains('btn-primary')){
        
        const product = carro[e.target.dataset.id];
        product.cantidad = carro[e.target.dataset.id].cantidad + 1;
        carro[e.target.dataset.id] = {...product};
        addTarjet()
    }
    if(e.target.classList.contains('btnMenos')){
        const product = carro[e.target.dataset.id];
        console.log(product)
        product.cantidad--;
        if (product.cantidad === 0){
            delete carro[e.target.dataset.id];
        };
        addTarjet()
    };
    if(e.target.classList.contains('buttonDelete')){
        const product = carro[e.target.dataset.id];
        delete carro[e.target.dataset.id];
        
        addTarjet()
       
       
    } 
    
   
      
    e.stopPropagation();
    
} 




