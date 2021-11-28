
import {Usuario} from "./usuario.js";
import {Examen} from "./examen.js";
import {Pregunta} from "./pregunta.js";

//Creación de usuario==========================
const Usuario1 = new Usuario("Camilo");

//Creación de Preguntas =====================
const Pregunta1 = new Pregunta("Cual de esto platos en una comida típica del Chocó",["Bandeja Paisa","Arroz con Longaniza","Ajiaco","Pizza"],1,"imagen collage");

const Pregunta2 = new Pregunta("Cual es el origen de este platillo",["Colombia","México","Italia","Francia"],2,"Imagen Pasta");

const Pregunta3 = new Pregunta("Cual es el origen de este platillo",["España","Chile","USA","México"],3,"imagen Tacos con chile");

const Pregunta4 = new Pregunta("Cual de los siguientes platos es una comida tipica de España",["Paella","Croissant ","Pollo Frito","Emparedado de Pavo"],0,"imagen collage");

const Pregunta5 = new Pregunta("Que ingredientes no lleva el sancocho",["Papa","Tomate","Lechuga","Pollo"],2,"imagen Collage");

let preguntas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5];

//Creación de Examen=================
const ExamenComida = new Examen("Origen de la comida",Usuario1, preguntas);


//EJEMPLO DE EVALUACION DE PREGUNTA PAELLA
Pregunta1.evaluar(1);//1 True
Pregunta2.evaluar(3);//2 false
Pregunta3.evaluar(3);//3 True
Pregunta4.evaluar(1);//0 false
Pregunta5.evaluar(2);//2 True
//true = 3
//false = 2

ExamenComida.calificar();

console.log(ExamenComida.calificar());

/* console.log(Pregunta4); */
/* console.log(Pregunta4);  */

/* const ExamenComida = new Examen(); */

/* const botonRegistro = document.getElementById("botonRegistro");

botonRegistro.addEventListener("click", clickLogin);

function clickLogin() {
    console.log("se hizo clic en login");
    //botonRegistro.style.display = "none";
   let h1 = document.createElement("h1");
   h1.textContent = "Soy un H1 desde JS";
   h1.classList.add("titulo");

   let contenedor = document.getElementById("container");

    //contenedor.appendChild(h1); 
   document.body.appendChild(h1);
} */