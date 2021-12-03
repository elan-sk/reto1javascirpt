import {preguntas} from "./creadorPreguntas.js";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import * as controlador from "./controlador.js";

// VARIABLES ==================================================================
var salir;
let fp; //Funcion con promesa en espera.
//ELEMENTOS++++++++++++++++++++++++++
//ELEMENTOS SECCION LOGIN---------------------------------
const seccionLogin = document.getElementById("seccionLogin");
const inputAlias = document.getElementById("alias");
const btnIngresar = document.getElementById("btnIngresar");
//ELEMENTOS SECCION PREGUNTAS ------------------------------------- 
const seccionPreguntas = document.getElementById("seccionPreguntas");
const encabezado = document.getElementById("encabezado");
const imagen = document.getElementById("imagen");
const contenedorOpciones = document.getElementById("opciones-contenedor");
const btnsOpcion = document.getElementsByClassName("btnOpcion");
const btnOpcion1 = document.getElementById("btnOpcion1");
const btnOpcion2 = document.getElementById("btnOpcion2");
const btnOpcion3 = document.getElementById("btnOpcion3");
const btnOpcion4 = document.getElementById("btnOpcion4");
//ELEMENTOS SECCION RESULTADOS -------------------------------------
const seccionResultados = document.getElementById("seccionResultados");
const seccionMensaje = document.getElementById("seccionMensaje");
const mensajeTexto = document.getElementById("mensaje-texto");
const mensajeBoton = document.getElementById("mensaje-boton");


//Inicio de la aplicación con una función anonima auto ejecutable.
(async ()=>{

    controlador.mostrarElementos([seccionLogin], true);

    const clickIngresar = () => {
        return new Promise(resolve => {
            btnIngresar.addEventListener("click", function () {
                alert(inputAlias.value);
                console.log(document.getElementById("alias").value);
                controlador.mostrarElementos ([seccionLogin], false);
                controlador.mostrarElementos ([seccionPreguntas], true);
                resolve(true);
            });
        })
    };

    fp = await clickIngresar();

    controlador.mostrarElementos ([seccionResultados], true);
    
    
})();

//ELEMENTOS SECCION MENSAJE -------------------------------------

//  PRUEBAS=====================================================================

//  finPRUEBAS=====================================================================




