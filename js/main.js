
let nombre = document.getElementById("Nombre");
let email = document.getElementById("email");
let celular = document.getElementById("Celular");
let consulta = document.getElementById("consulta");
let boton = document.getElementById("btn1");
let lista = document.getElementById("List");
const listComentarios = document.getElementById('jquery1');
const arrayDatos = [];
const arrayDatosLocals = [];
let id = 1;
let datos = [];




//CLASES
class Comentario {
    constructor(id, nombre, emial, celular, consulta) {
        this.id = id,
            this.nombre = nombre,
            this.emial = emial,
            this.celular = celular,
            this.consulta = consulta

    }
};

class ComentarioLocal {
    constructor(datos) {
        this.id = datos.id,
            this.nombre = datos.nombre,
            this.emial = datos.emial,
            this.celular = datos.celular,
            this.consulta = datos.consulta

    }
};
// FUNCIONES FORO DE COMENTARIOS CON INCORPORACION DESDE LOCALSTORAGE  
$(document).ready(function () {
    console.log("ready!");

    if (localStorage.getItem("comentarios")) {
        datosLocal();
        addform(arrayDatosLocals);

    } else {
        console.log("no hay datos en local")
    }

});

$('#btnEnviar').click(function (e) {
    e.preventDefault()
    if (validar_form()) {
        nuevoComentario = new Comentario(id, nombre.value, email.value, celular.value, consulta.value);
        datosForm();
        id++;
        addform1(arrayDatos)
        dataBase();
        $('#divForm').fadeOut();


    }


});
//funcion para comentarios desde localstorage
function addform() {

    for (const dato of arrayDatosLocals) {
        $('#jquery1').append(`<div class="container__bkgn">
                                        <h2> Comentario de :</h2>
                                        <p>${dato.nombre}</p>
                                        <h3>Comentario:</h3>
                                        <p> ${dato.consulta}</p>
                                        <h5> Gracias por dejarnos su comentario</h5> 
                                    </div>
                                    `);
    }

};

//funcion para comentarios desde Formulario                        
function addform1() {
    listComentarios.innerHTML = '';
    for (const dato of arrayDatos) {
        $('#jquery1').append(`<div class="container__bkgn">
                                        <h2> Comentario de :</h2>
                                        <p>${dato.nombre}</p>
                                        <h3>Comentario:</h3>
                                        <p> ${dato.consulta}</p>
                                        <h5> Gracias por dejarnos su comentario</h5> 
                                    </div>
                                    `);
    }

};




// funcion para obetner y guardar datos del formulario en array y en localstorage

function datosForm() {
    arrayDatos.push(nuevoComentario);
    console.log(arrayDatos);
}

function dataBase() {
    arrayDatosjson = JSON.stringify(arrayDatos);
    localStorage.setItem("comentarios", arrayDatosjson);

}
function datosLocal() {
    if (localStorage.getItem("comentarios")) {
        datos = JSON.parse(localStorage.getItem("comentarios"));
        console.log(datos);
        console.log("aqui");
        for (i = 0; i < datos.length; i++) {
            console.log(datos[i]);
            comentariosHtml = new ComentarioLocal(datos[i]);
            console.log(comentariosHtml);
            arrayDatosLocals.push(comentariosHtml);
            console.log(arrayDatosLocals)
            console.log("aqui1");
        }
    } else {
        console.log("no hay datos");
    }


}
// MODIFICACION ESTILOS .CSS
$('#foroComentarios').append(`<h2 class="bkgn">Bienvenidos al foro de comentarios</h2>
                                    `);

$('#foroComentarios').css('box-shadow', '10px 10px 5px 0px grey');


// VALIDACION FORM
function validar_form() {



    if (!nombre.value) {
        /* nombre = $('#Nombre'); */
        $('#Nombre').focus();

        return false;


    }

  
    if (!email.value) {
        
        $("#email").focus();
        
       
    }
    if (email.value){
        let caracteres = /\S+@\S+\.\S+/;
            let esValido = caracteres.test(email.value);
            console.log(esValido)
            if(esValido== false){
                $("#email").focus();
                return false
            }
    }
        

    


if (!celular.value) {
   
    alert("ingrese su numero");
    return false;


}
if (!consulta.value) {
  
    alert("ingrese su comentario");
    return false;


}

return true;

}


// FUNCION INTERACTIVA
$(document).ready(function (e) {
    $('#divForm').fadeOut();
    $('#contacto__titulo').click(function (e) {
        $('#contacto__titulo').css("cursor: url('cursor url with protocol'), auto");
        $('#divForm').fadeIn(2000)

    })
    $('#cerrar').click(function (e) {
        $('#divForm').fadeOut(2000)
    })

})


