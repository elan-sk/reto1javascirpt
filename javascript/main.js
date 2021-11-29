import {preguntas} from "./creadorPreguntas.js";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import * as controlador from "./controlador.js";

//Creación de usuario==========================
const Usuario1 = new Usuario("Camilo");

//Creación de Examen=================
const ExamenComida = new Examen("Origen de la comida",Usuario1, preguntas);


//  PRUEBAS=====================================================================
function click() {
    return console.log("hice click");
}

console.log(controlador.opcionSeleccionada());
//  finPRUEBAS=====================================================================


