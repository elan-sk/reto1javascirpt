import {preguntasCreadas} from './creadorPreguntas.js';
import {Usuario} from './Usuario.js';
import {Examen} from './Examen.js';
import * as controlador from './controlador.js';

// VARIABLES ==================================================================
//ELEMENTOS++++++++++++++++++++++++++
//ELEMENTOS SECCION LOGIN---------------------------------
const seccionLogin = document.getElementById('seccionLogin');
const inputAlias = document.getElementById('alias');
const btnIngresar = document.getElementById('btnIngresar');
//ELEMENTOS SECCION PREGUNTAS ------------------------------------- 
const seccionPreguntas = document.getElementById('seccionPreguntas');
const encabezadoPregunta = document.getElementById('encabezado');
const imagen = document.getElementById('imagen');
const numeroPregunta = document.getElementById('numeroPregunta');
const contenedorOpciones = document.getElementById('opciones-contenedor');
const btnOpcion1 = document.getElementById('btnOpcion1');
const btnOpcion2 = document.getElementById('btnOpcion2');
const btnOpcion3 = document.getElementById('btnOpcion3');
const btnOpcion4 = document.getElementById('btnOpcion4');
const btnsOpciones = [btnOpcion1,btnOpcion2,btnOpcion3,btnOpcion4];
//ELEMENTOS SECCION RESULTADOS -------------------------------------
const seccionResultados = document.getElementById('seccionResultados');
const resultadoEncabezado = document.getElementById('resultado-encabezado');
const resultadoTexto = document.getElementById('resultado-texto');

const btnJugarNuevamente = document.getElementById('btnJugarNuevamente');
const btnSalir = document.getElementById('btnSalir');


//Inicio de la aplicación con una función anonima, asincrona y auto ejecutable.
(async function app() {

    controlador.mostrarElementos([seccionLogin], true);

    function ingresar() {
        return new Promise (resolve =>{
            btnIngresar.addEventListener('click', function () {
                if(inputAlias.value.trim()){
                    let nuevoUsuario = new Usuario (inputAlias.value.trim());
                    let examen = new Examen ('Comidas del mundo', nuevoUsuario, preguntasCreadas);
                    
                    const {tematica, usuario, preguntas} = examen;

                    async function mensaje(){
                        const promesa = await controlador.mostrarMensaje(`Bienvenid@ ${usuario.nombre}! A continuación se le presentará un examen sobre ${tematica} con ${preguntas.length} preguntas, la calificación va de 0 a 100 puntos`, 'Continuar')

                        resolve(examen); 
                    }

                    mensaje();
                }else{
                    inputAlias.value = '';
                    controlador.mostrarMensaje('¡Debe ingresar un alias!', 'Aceptar');
                };  
            });
        })
    };
        
   
    let examenComida = await ingresar();
    let {usuario, preguntas} = examenComida;
    controlador.mostrarElementos([seccionLogin], false);
 
    
    async function jugar() {

        controlador.mostrarElementos([seccionPreguntas], true);
        controlador.desordenar(examenComida.preguntas);
     
        

        for (const indice in preguntas) {
            const pregunta = preguntas[indice];
            controlador.escribir(numeroPregunta, (parseInt(indice)+1) + '/' + preguntas.length);
            controlador.restaurarElementos(btnsOpciones);
            
            await controlador.cargarPregunta(pregunta, encabezadoPregunta, imagen, btnsOpciones);
            
            const IdOpcionSeleccionada = await controlador.elementoSeleccionado(contenedorOpciones, 'btnOpcion' , 'click');
            console.log(IdOpcionSeleccionada);
            let {opciones} = pregunta;
            let indiceOpcionSeleccionada = controlador.posicionOpcion(IdOpcionSeleccionada);
            let opcionSeleccionada = opciones[indiceOpcionSeleccionada];
            pregunta.evaluar(indiceOpcionSeleccionada);
            
            await controlador.esperarSegundos(0.5);
            
            
            if (opcionSeleccionada.correcta === true){
                controlador.reemplazarClase(document.getElementById(IdOpcionSeleccionada),'opcion--correcta','opcion--incorrecta');
            } else {
                for (const indice in opciones) {
                    if(opciones[indice].correcta) {
                        controlador.reemplazarClase(btnsOpciones[indice],'opcion--correcta','opcion--incorrecta'); 
                    }else {
                        controlador.reemplazarClase(btnsOpciones[indice],'opcion--incorrecta','opcion--correcta'); 
                    }
                }
            }
            
            controlador.deshabilitarElementos(btnsOpciones);
            await controlador.esperarSegundos(2);
        }

       
        controlador.mostrarElementos([seccionPreguntas],false);
        controlador.mostrarElementos([seccionResultados],true);
        
        const {calificacion,preguntasCorrectas,preguntasIncorrectas,totalPreguntas} = examenComida.calificar();
        
        
        controlador.escribir(resultadoEncabezado,
            `Resultados del usuario ${usuario.nombre}: <br><br>`);
            controlador.escribir(resultadoTexto, 
                `<strong>Calificación   :</strong> ${calificacion} puntos <br> 
                <strong>Preguntas Buenas:</strong> ${preguntasCorrectas} <br>
                <strong>Preguntas Malas :</strong> ${preguntasIncorrectas} <br>
                <strong>Total Preguntas :</strong> ${totalPreguntas}`);
                
        async function repetirExamen(){
            this.removeEventListener('click', repetirExamen);
            controlador.mostrarElementos([seccionResultados]);
            await jugar();
        }

        function salirExamen(){
            this.removeEventListener('click', salirExamen);
            controlador.mostrarElementos([seccionResultados]);
            inputAlias.value = '';
            app(); 
        }

        btnJugarNuevamente.addEventListener('click', repetirExamen);
        btnSalir.addEventListener('click', salirExamen);  

        return true;
    };

    
    await jugar();//Correr preguntas

})();


