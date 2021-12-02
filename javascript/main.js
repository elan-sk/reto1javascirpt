import {preguntas} from "./creadorPreguntas.js";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import * as cont from "./controlador.js";

// VARIABLES ==================================================================
var salir;
//ELEMENTOS++++++++++++++++++++++++++
//SECCIONES-----------------
const seccionLogin = document.getElementById("login");
const seccionPreguntas = document.getElementById("preguntas");
const seccionResultados = document.getElementById("resultados");
const seccionMensaje = document.getElementById("mensaje");


//  PRUEBAS=====================================================================
cont.mostrarElementos([seccionLogin], true);

//  finPRUEBAS=====================================================================


