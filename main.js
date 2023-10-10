//Muestra en un elemento HTML un texto determinado
export function escribir (elemento, texto) {
    elemento.innerHTML = texto;
    return true;
}

//carga la imagen
export function pintar (elemento, srcImagen) {
    elemento.src = srcImagen;
    return true;
}

//obtener texto
export function obtenerTexto (elemento) {
    let texto = elemento.textContent;
    return texto;
}

//Reemplaza una clase de un elemento HTML por otra. ejp: 'oculto' por 'visible'
//Nota: Se debe enviar como argumento el nombre de las clases sin el punto (.)
export function reemplazarClase (elemento, claseNueva, claseAntigua){
    if (elemento.classList.contains(claseAntigua) ){
        elemento.classList.remove(claseAntigua);
    }
    elemento.classList.add(claseNueva);
    return true;


  /*   elemento.classList.replace(claseAntigua,claseNueva);
    return true; */
}

export function removerClase (elemento, claseRemover){

    elemento.classList.remove(claseRemover);

    return true;
}

//Muestra u oculta uno o varios elemento de HTML
export function mostrarElementos(arregloElementos, boolean, esFlex = false) {
       let elementos = arregloElementos;
       let mostrar = boolean;

       for (const elemento of elementos) {
           if (mostrar) {
               if (esFlex){
                reemplazarClase(elemento,'visible-flex','oculto');
               }else {
                   reemplazarClase(elemento,'visible','oculto');
               }
           }else {
               reemplazarClase(elemento, 'oculto', 'visible');
           }
       }

   return true;
}

//Habilita o Deshabilita uno o varios elemento de HTML
//Nota: Como primer argumento se debe mandar un arreglo de elementos ejp:
    //mostrarElementos(document.getElementsByClassName('botones'));
    //En el caso de que solo sea un elemento debes mandarlo como un arreglo ejp:
    //mostrarElementos([document.getElementById('boton')]);
export function deshabilitarElementos(arregloElementos) {

    for (const elemento of arregloElementos) {
        elemento.classList.add('deshabilitado');
        elemento.disabled = true;
    }

    return true;
}

export function restaurarElementos(arregloElementos){
    for (const boton of arregloElementos) {
        boton.disabled = false;
        removerClase (boton, 'opcion--correcta');
        removerClase (boton, 'opcion--incorrecta');
        removerClase (boton, 'deshabilitado');
    }
    return true;
}


//Funcion no exportada que se usa como callBack en la funcion opcionSeleccionada()
//Y se encarga de escuchar un tipo de elemento dentro de un contenedor y ejemplo:
    // Escuchar los elementos de clase 'boton' dentro de un contenedor 'boton-contenedor'
//Devuelve el Id del elemento seleccionado dentro de un contenedor
//Nota: Se usas una promesa debido a que escucharElementos() es una funcion de naturaleza asincrona
export function elementoSeleccionado (elementoContenedor, claseElementos, evento) {
    return new Promise (resolve =>{
        const contenedorOpciones = elementoContenedor;

        contenedorOpciones.addEventListener(evento, e => {
            if  (e.target.classList.contains(claseElementos)){
                resolve (e.target.id);
                e.stopPropagation();
            }
        })
    })
}

//

//mostrar mensaje de al usuario.
export function mostrarMensaje (textoMensaje, textoBoton) {
    return new Promise (resolve => {
        let idContenedorMensaje = 'seccionMensaje';
        let elementoTexto = document.getElementById('mensaje-texto');
        let elementoBoton = document.getElementById('mensaje-boton');

        mostrarElementos ([document.getElementById(idContenedorMensaje)], true);

        escribir(elementoTexto, textoMensaje);
        escribir(elementoBoton, textoBoton);

        elementoBoton.addEventListener('click', function () {
            mostrarElementos ([document.getElementById(idContenedorMensaje)], false);
            resolve(true);
        });
    })
}


//Función de carga las pregunta en la página.
export function cargarPregunta(pregunta, tituloEncabezado, ImgPregunta, arregloBotones) {
    return new Promise (resolve=>{
        const{encabezado, opciones, imagen} = pregunta;

        escribir(tituloEncabezado, encabezado);
        pintar (ImgPregunta, imagen);
        desordenar(opciones);

        for (const indice in arregloBotones) {
           escribir(arregloBotones[indice], letra(indice) + opciones[indice].texto);
        }

        resolve(true);
    })
}


//Se encarga de desordenar el orden de las preguntas
export function desordenar(arreglo) {
    let indiceActual = arreglo.length, valorTemporal, IndiceAleatorio;

    // Mientras queden elementos a mezclar...
    while (0 !== indiceActual) {

        // Seleccionar un elemento sin mezclar...
        IndiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual -= 1;

        // E intercambiarlo con el elemento actual
        valorTemporal = arreglo[indiceActual];
        arreglo[indiceActual] = arreglo[IndiceAleatorio];
        arreglo[IndiceAleatorio] = valorTemporal;
    }


    return arreglo;
}

//devuelve la letra de la opcion de la pregunta segun el numero de la posicion en el el arreglo
function letra (indice) {
    let letra;

    switch (parseInt(indice)) {
        case 0:
            letra = 'A';
            break;
        case 1:
            letra = 'B';
            break;
        case 2:
            letra = 'C';
            break;
        case 3:
            letra = 'D';
            break;
        default:
            return letra= 'no valido';
      }

    return letra +='. ' ;
}


//devuelve la numero de la posicion según el nombre del id del boton seleccionado.
export function posicionOpcion (IdOpcion) {
    let posicion;

    switch (IdOpcion) {
        case 'btnOpcion1':
            posicion = 0;
            break;
        case 'btnOpcion2':
            posicion = 1;
            break;
        case 'btnOpcion3':
            posicion = 2;
            break;
        case 'btnOpcion4':
            posicion = 3;
            break;
        default:
            return posicion= 'no valido';
      }

    return posicion;
}

//Detiene el flujo del programa por un determinado numero de segundos.
export function esperarSegundos (tiempoSegundos){
    return new Promise(resolve => {
        let intervalo = setInterval(()=>{
            clearInterval(intervalo);
            resolve(true)
        },tiempoSegundos*1000);
    })
}

/* export function animation(elemento, animacion, tiempoSegundos){
    let texto = animacion + ' ' + tiempoSegundos + 's  ';
    elemento.style.animation = texto;

    return new Promise(resolve =>{
        let intervalo = setInterval(()=>{
            elemento.style.animationPlayState = 'paused'; running
            elemento.style.animation= 'none';
            clearInterval(intervalo);
            resolve(true);
        },tiempoSegundos*1000);
    })
} */
/* export function animacion(elemento, animacion, tiempoSegundos){
    reemplazarClase(elemento,animacion,animacion);

    return new Promise(resolve =>{
        let intervalo = setInterval(()=>{
            elemento.style.animation= 'none';
            clearInterval(intervalo);
            resolve(true);
        },tiempoSegundos*1000);
    })
} */

export {Usuario};

class Usuario {

    constructor(nombre) {
        this.nombre = nombre;
    }

};

export {Pregunta};

class Pregunta {
    //Natti
    constructor(encabezado,opciones,imagen) {
        this.encabezado=encabezado;
        this.opciones=opciones;
        this.imagen=imagen;
        this.respondido= false;
    }
    //función que se encarga de validar si el usuario respondio correctamente.
    evaluar (opcionSeleccionada) {

        this.respondido = true;

        if (this.opciones[opcionSeleccionada].correcta){
            this.evaluacion = true;
            return true;
        } else {
            this.evaluacion = false;
            return false;
        }
    }
};


export {Examen};

class Examen {
    //Constructor de Yeicy.
    constructor(tematica,usuario,preguntas){
        this.tematica= tematica;
        this.usuario=usuario;
        this.preguntas=preguntas;
    }

    //Función que se encarga de calcular la calificación del examen.
    calificar () {
        let preguntasCorrectas = 0;
        let calificacion = 0;

        for (const xPregunta of this.preguntas ) {
            // pregunta2.evaluacion
            if (xPregunta.evaluacion === true){
                preguntasCorrectas++;
            }
        }

        calificacion = (preguntasCorrectas/this.preguntas.length)*100;

        this.calificacion = calificacion;

        let preguntasIncorrectas =  this.preguntas.length - preguntasCorrectas;


        return {
            calificacion:this.calificacion,
            preguntasCorrectas:preguntasCorrectas, preguntasIncorrectas:preguntasIncorrectas,
            totalPreguntas:this.preguntas.length}
    }
}
import {Pregunta} from './Pregunta.js';

export{preguntasCreadas};

//Creación de Preguntas =====================
const Pregunta1 = new Pregunta('¿Cuanto es:?',[
    {texto:'3',correcta:true},
    {texto:'6',correcta:false},
    {texto:'1',correcta:false},
    {texto:'4',correcta:false}],
    'img/Picture1.png');

const Pregunta2 = new Pregunta('¿Cuanto es:?',[
    {texto:'6',correcta:true},
    {texto:'9',correcta:false},
    {texto:'12',correcta:false},
    {texto:'24',correcta:false}],
    'img/Picture2.png');

const Pregunta3 = new Pregunta('¿Cuanto es:?',[
    {texto:'9',correcta:true},
    {texto:'12',correcta:false},
    {texto:'21',correcta:false},
    {texto:'18',correcta:false}],
    'img/Picture3.png');

const Pregunta4 = new Pregunta('¿Cuanto es:?',[
    {texto:'12',correcta:true},
    {texto:'27',correcta:false},
    {texto:'9',correcta:false},
    {texto:'6',correcta:false}],
    'img/Picture4.png');

const Pregunta5 = new Pregunta('¿Cuanto es:?',[
    {texto:'15',correcta:true},
    {texto:'18',correcta:false},
    {texto:'21',correcta:false},
    {texto:'30',correcta:false}],
    'img/Picture5.png');

const Pregunta6 = new Pregunta('¿Cuanto es:?',[
    {texto:'18',correcta:true},
    {texto:'21',correcta:false},
    {texto:'6',correcta:false},
    {texto:'3',correcta:false}],
    'img/Picture6.png');

const Pregunta7 = new Pregunta('¿Cuanto es:?',[
    {texto:'21',correcta:true},
    {texto:'24',correcta:false},
    {texto:'27',correcta:false},
    {texto:'30',correcta:false}],
    'img/Picture7.png');

const Pregunta8 = new Pregunta('¿Cuanto es:?',[
    {texto:'24',correcta:true},
    {texto:'23',correcta:false},
    {texto:'20',correcta:false},
    {texto:'18',correcta:false}],
    'img/Picture8.png');

const Pregunta9 = new Pregunta('¿Cuanto es:?',[
    {texto:'27',correcta:true},
    {texto:'30',correcta:false},
    {texto:'15',correcta:false},
    {texto:'9',correcta:false}],
    'img/Picture9.png');

const Pregunta10 = new Pregunta('¿Cuanto es:?',[
    {texto:'30',correcta:true},
    {texto:'12',correcta:false},
    {texto:'15',correcta:false},
    {texto:'9',correcta:false}],
    'img/Picture10.png');

//arreglo de preguntas
var preguntasCreadas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5,Pregunta6,Pregunta7,Pregunta8,Pregunta9,Pregunta10];


export {Examen};

class Examen {
    //Constructor de Yeicy.
    constructor(tematica,usuario,preguntas){
        this.tematica= tematica;
        this.usuario=usuario;
        this.preguntas=preguntas;
    }

    //Función que se encarga de calcular la calificación del examen.
    calificar () {
        let preguntasCorrectas = 0;
        let calificacion = 0;

        for (const xPregunta of this.preguntas ) {
            // pregunta2.evaluacion
            if (xPregunta.evaluacion === true){
                preguntasCorrectas++;
            }
        }

        calificacion = (preguntasCorrectas/this.preguntas.length)*100;

        this.calificacion = calificacion;

        let preguntasIncorrectas =  this.preguntas.length - preguntasCorrectas;


        return {
            calificacion:this.calificacion,
            preguntasCorrectas:preguntasCorrectas, preguntasIncorrectas:preguntasIncorrectas,
            totalPreguntas:this.preguntas.length}
    }
}


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


