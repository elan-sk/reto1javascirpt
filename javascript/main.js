import {preguntasCreadas} from "./creadorPreguntas.js";
import {Usuario} from "./Usuario.js";
import {Examen} from "./Examen.js";
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
const btnOpcion1 = document.getElementById("btnOpcion1");
const btnOpcion2 = document.getElementById("btnOpcion2");
const btnOpcion3 = document.getElementById("btnOpcion3");
const btnOpcion4 = document.getElementById("btnOpcion4");
const btnsOpcion = [btnOpcion1,btnOpcion2,btnOpcion3,btnOpcion4];
//ELEMENTOS SECCION RESULTADOS -------------------------------------
const seccionResultados = document.getElementById("seccionResultados");
const seccionMensaje = document.getElementById("seccionMensaje");
const mensajeTexto = document.getElementById("mensaje-texto");
const mensajeBoton = document.getElementById("mensaje-boton");


//Inicio de la aplicación con una función anonima, asincrona y auto ejecutable.
(async ()=>{

 /*controlador.mostrarElementos([seccionLogin], true);

    const ingresar = () => {
        return new Promise(resolve => {
            btnIngresar.addEventListener("click", function () {
                if(inputAlias.value.trim()){
                    let usuario = new Usuario (inputAlias.value.trim());
                    const examen = new Examen ("Comidas del mundo", usuario, preguntasCreadas);
                    controlador.mostrarElementos ([seccionLogin], false);
                    controlador.mostrarElementos ([seccionPreguntas], true);
                    resolve(examen);
                }else{
                    inputAlias.value = "";
                    controlador.mostrarMensaje("¡Debe ingresar un alias!", "Aceptar");
                };
            });
        })
    };
    const examenComida = await ingresar(); */
    //para pruebas
        let usuario = new Usuario ("Pepito Perez");
        const examenComida = new Examen ("Comidas del mundo", usuario, preguntasCreadas);
    //________________
    controlador.mostrarElementos([seccionPreguntas], true);
    controlador.desordenar(examenComida.preguntas);
    const {preguntas} = examenComida;
    
    //inicio for--------------------------------------------------------------
    let indicePregunta = 0;
    let pregunta = preguntas[indicePregunta];

    controlador.cargarPregunta(pregunta, encabezado, imagen, btnsOpcion);
    const IdOpcionSeleccionada = await controlador.elementoSeleccionado(contenedorOpciones, "btnOpcion" , "click");
    let {opciones} = pregunta;
    let indiceOpcionSeleccionada = controlador.posicionOpcion(IdOpcionSeleccionada);
    pregunta.evaluar(indiceOpcionSeleccionada);
    let opcionSeleccionada = opciones[indiceOpcionSeleccionada];

    await controlador.esperarSegundos(0.7);
    
    if (opcionSeleccionada.correcta){
        controlador.reemplazarClase(document.getElementById(IdOpcionSeleccionada),"opcion--correcta","opcion--incorrecta");
    } else {
        for (const indice in opciones) {
            if(opciones[indice].correcta) {
                controlador.reemplazarClase(btnsOpcion[indice],"opcion--correcta","opcion--incorrecta"); 
            }else {
                controlador.reemplazarClase(btnsOpcion[indice],"opcion--incorrecta","opcion--correcta"); 
            }
        }
    }

    controlador.habilitarElementos(btnsOpcion, false);
    await controlador.esperarSegundos(1);

   
   /*  console.log(controlador.letra(3));
 */

/* 
    const ejecutarPreguntas = () => {
        return new Promise(resolve => {


        });
    }    */
    
    
})();

//ELEMENTOS SECCION MENSAJE -------------------------------------

//  PRUEBAS=====================================================================

//  finPRUEBAS=====================================================================




