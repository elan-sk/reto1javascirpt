import {Pregunta} from "./pregunta.js";

export{preguntas};

//Creación de Preguntas =====================
const Pregunta1 = new Pregunta("Cual de esto platos en una comida típica del Chocó",["Bandeja Paisa","Arroz con Longaniza","Ajiaco","Pizza"],1,"imagen collage");

const Pregunta2 = new Pregunta("Cual es el origen de este platillo",["Colombia","México","Italia","Francia"],2,"Imagen Pasta");

const Pregunta3 = new Pregunta("Cual es el origen de este platillo",["España","Chile","USA","México"],3,"imagen Tacos con chile");

const Pregunta4 = new Pregunta("Cual de los siguientes platos es una comida tipica de España",["Paella","Croissant ","Pollo Frito","Emparedado de Pavo"],0,"imagen collage");

const Pregunta5 = new Pregunta("Que ingredientes no lleva el sancocho",["Papa","Tomate","Lechuga","Pollo"],2,"imagen Collage");

//arreglo de preguntas
var preguntas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5];

