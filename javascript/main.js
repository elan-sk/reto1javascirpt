import {preguntas} from "./creadorPreguntas";
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";

//Creación de usuario==========================
const Usuario1 = new Usuario("Camilo");

//Creación de Examen=================
const ExamenComida = new Examen("Origen de la comida",Usuario1, preguntas);