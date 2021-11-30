import {preguntas} from "./creadorPreguntas.js";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import * as controlador from "./controlador.js";

//Creación de usuario==========================
const Usuario1 = new Usuario("Camilo");

//Creación de Examen=================
const ExamenComida = new Examen("Origen de la comida",Usuario1, preguntas);

controlador.mostrarElementos([document.getElementById("preguntas")],true);

controlador.escribir("encabezado",preguntas[0].encabezado);

controlador.escribir("btnOpcion1",preguntas[0].opciones[0]);
controlador.escribir("btnOpcion2",preguntas[0].opciones[1]);
controlador.escribir("btnOpcion3",preguntas[0].opciones[2]);
controlador.escribir("btnOpcion4",preguntas[0].opciones[3]);

//  PRUEBAS=====================================================================
function click() {
    return console.log("hice click");
}


/* controlador.habilitarElementos(document.getElementsByClassName("btnOpcion"),false);

controlador.reemplazarClase(document.getElementById("btnOpcion2"), "opcion--correcta", "opcion--incorrecta");

controlador.reemplazarClase(document.getElementById("btnOpcion3"), "opcion--incorrecta" , "opcion--correcta"); */


console.log(controlador.opcionSeleccionada());

/* console.log(controlador.opcionSeleccionada()); */
//  finPRUEBAS=====================================================================


