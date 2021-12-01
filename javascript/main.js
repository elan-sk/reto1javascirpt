import {preguntas} from "./creadorPreguntas.js";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import * as cont from "./controlador.js";
var salir;

(async function Inicio () {

    (async function seccionLogin () {
        let elemento = document.getElementById("login");
        const mostrarLogin = cont.mostrarElementos([elemento],true);
    })()

    (async function seccionPreguntas () {
        let elemento = document.getElementById("preguntas");
        const mostrarLogin = cont.mostrarElementos([elemento],true);
    })()
})()

//Funciones

/* //Creación de usuario==========================
const Usuario1 = new Usuario("Camilo");

//Creación de Examen=================
const ExamenComida = new Examen("Origen de la comida",Usuario1, preguntas); */

//login==========================================================
/* cont.mostrarElementos([document.getElementById("login")],true);

const login = async () => {
    let alias = document.getElementById("alias");
    let btnIngresar = document.getElementById("btnIngresar");
    
    if (btnIngresar.addEventListener){
       btnIngresar.addEventListener("click", ()=>{
            console.log ("entre")
            salir = false;
        })
    }
}
    
    
} while (salir);

console.log("sali del bucle");
console.log(cont.mostrarMensaje("Hola deseas salir", "salir"));

/* 

if (document.getElementById("mensaje-boton").addEventListener){
    cont.escucharEventoId("mensaje-boton", "click", () => {
        cont.mostrarElementos([document.getElementById("mensaje")],false);
        cont.mostrarElementos([document.getElementById("preguntas")],true);
    })
} */



//  PRUEBAS=====================================================================


//  finPRUEBAS=====================================================================


