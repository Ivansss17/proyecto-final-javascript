let libro = "";
let cantidadLibro = 1;
let precio = 0;
const arrayPedidos = [];
let btnLibro1 = document.getElementById("btnLibro1");
let boton2 = document.getElementById("btnLibro2");
let boton3 = document.getElementById("btnLibro3");
let boton4 = document.getElementById("btnLibro4");
let id = 1;
let carro = {};
const compra = document.getElementById('productosSelecionados');
const totalCant = document.getElementById('totalCant');
const fragment = document.createDocumentFragment;




// funcion mantener articulos selecsionados
document.addEventListener('DOMContentLoaded' , ()=>{
    fetchData()
    console.log("ahora")
    if (localStorage.getItem('carrito')){
        carro = JSON.parse(localStorage.getItem('carrito'));
        console.log(carro , "aqui null")
        addTarjet()
       
    }
    
})

document.addEventListener('DOMContentLoaded', () => {
    fetchData()
    
})
const fetchData = async () => {
    try {
        const res = await fetch('./json/json.json')
        const data = await res.json()
        /* pintacarrito(data) */
      /*   console.log("ingreso al fetc")
        console.log(data) */
    } catch (error) {
        console.log(error)
        console.log("ingreso al erro fetc")

    }
}
if (localStorage.getItem('carrito') & localStorage.getItem('carrito') != {}){
$(document).ready(function (e) {
    $('.shopping-cart').fadeIn();
})}else {
    $('.shopping-cart').fadeOut();
}

Libros.addEventListener('click', (e) => {
    addCarrito(e);
})
productosSelecionados.addEventListener('click', (e) => {
    btnmas(e);
})





const addCarrito = e => {

    if (e.target.classList.contains('btnAdd')) {
        setCarrito(e.target.parentElement)
        console.log("addcarrito")
    };
    e.stopPropagation();
}

const setCarrito = objeto => {

    const producto = {

        id: objeto.querySelector('.item-button').dataset.number,
        title: objeto.querySelector('h4').textContent,
        precio: objeto.querySelector('h5').textContent,
        cantidad: 1
    }

    if (carro.hasOwnProperty(producto.id)) {
        producto.cantidad = carro[producto.id].cantidad + 1
    }

    carro[producto.id] = { ...producto };
    console.log(carro)
    addTarjet()

}

//CLASE 

class ProductosL {
    constructor(objeto){
        this.id = objeto.id,
        this.nombre = objeto.nombre,
        this.precio = objeto.precio,
        this.cantidad = objeto.cantidad
        this.comentario = objeto.comentario
        
    }
};




// OBTENCION DE PRODUCTOS DESDE JSON
const productos = new Array();

const urlJson = "./json/json.json";

$.getJSON(urlJson, function(respuesta, estado){
    if(estado === "success"){
        
        let misDatos = respuesta;
        for (const dato of misDatos){
             prod = new ProductosL (dato);
             productos.push(prod);
            
        }   
        carrito();
    }else {
        console.log(estado)
        }
    })
    
console.log(productos);
console.log("estoy aqui");

// INCORPORACION DE TARJETAS DE CARRITO
function carrito() {
    

for (const producto of productos) {
    
    $('#Libros').append(`<div class="card" style="width: 18rem; ">
    <img src="./adjuntos/${producto.id}.png" class="card-img-top" alt="${producto.id}" id="img${producto.id}">
    <div class="card-body">
      <h4 id="${producto.nombre}" class="card-title" value="${producto.nombre}">${producto.nombre}</h4>
      <p class="card-text">${producto.comentario}</p>
      <h5>${producto.precio}</h5>
      <button id="${producto.id}" data-number="${producto.id}" class="item-button btn btn-primary btnAdd">AÑADIR AL CARRITO</button>
    </div>
  </div>`);

}} 

