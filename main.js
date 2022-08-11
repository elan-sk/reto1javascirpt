class Usuario {

    constructor(nombre) {
        this.nombre = nombre;
    }

};
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
class Pregunta {
    //Natti
    constructor(encabezado,opciones,imagen, tipo) {
        this.encabezado=encabezado;
        this.opciones=opciones;
        this.imagen=imagen;
        this.respondido= false;
        this.tipo= tipo;
    }
    //función que se encarga de validar si el usuario respondió correctamente.
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

const Pregunta1 = new Pregunta('La Pensión Obligatoria es un ahorro que se hace durante toda la vida laboral, bien sea como trabajador independiente o como dependiente (empleado).',[
    {texto:'Falso',correcta:false},
    {texto:'Verdadero',correcta:true},
    {texto:'',correcta:false},
    {texto:'',correcta:false}],
    'img/imagen_1.jpg',1);

const Pregunta2 = new Pregunta('Los aportes que realizas a pensión obligatoria cada mes corresponden al 16% de tu salario, si eres empleado el empleador aportará el _____ y tú el _____ restante.',[
    {texto:'75% y 25%',correcta:true},
    {texto:'20% y 80%',correcta:false},
    {texto:'50% y 50%',correcta:false},
    {texto:'90% y 10%',correcta:false}],
    'img/imagen_2.jpg',0);

const Pregunta3 = new Pregunta('¿Cuáles son las causas por las que se pueden retirar las cesantías?',[
    {texto:'En caso de quedar cesante (finalización del vínculo laboral).',correcta:false},
    {texto:'Para comprar, mejorar, liberar de hipoteca tu vivienda.',correcta:false},
    {texto:'Asimismo, el pago de matrículas en instituciones y programas técnicos.',correcta:false},
    {texto:'Todas las anteriores',correcta:true}],
    'img/imagen_3.jpg',0);

const Pregunta4 = new Pregunta('¿Se puede trasladar solamente las Cesantías a otro fondo y dejar la pensión quieta?',[
    {texto:'Falso',correcta:false},
    {texto:'Verdadero',correcta:true},
    {texto:'',correcta:false},
    {texto:'',correcta:false}],
    'img/imagen_4.jpg',1);


//arreglo de preguntas
var preguntasCreadas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4];

//Muestra en un elemento HTML un texto determinado
function escribir (elemento, texto) {
    elemento.innerHTML = texto;
    return true;
}

//carga la imagen
function pintar (elemento, srcImagen) {
    elemento.src = srcImagen;
    return true;
}

//obtener texto
 function obtenerTexto (elemento) {
    let texto = elemento.textContent;
    return texto;
}

//Reemplaza una clase de un elemento HTML por otra. ejp: 'oculto' por 'visible'
//Nota: Se debe enviar como argumento el nombre de las clases sin el punto (.)
 function reemplazarClase (elemento, claseNueva, claseAntigua){
    if (elemento.classList.contains(claseAntigua) ){
        elemento.classList.remove(claseAntigua);
    }
    elemento.classList.add(claseNueva);
    return true;
}

 function removerClase (elemento, claseRemover){
    if (elemento.classList.contains(claseRemover) ){
        elemento.classList.remove(claseRemover);
    }
    return true;
}

//Muestra u oculta uno o varios elemento de HTML
 function mostrarElementos(arregloElementos, boolean) {
       let elementos = arregloElementos;
       let mostrar = boolean;

       for (const elemento of elementos) {
           if (mostrar) {
                reemplazarClase(elemento,'visible','oculto');
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
 function deshabilitarElementos(arregloElementos) {

    for (const elemento of arregloElementos) {
        elemento.classList.add('deshabilitado');
        elemento.disabled = true;
    }

    return true;
}

 function restaurarElementos(arregloElementos){
    for (const boton of arregloElementos) {
        boton.disabled = false;
        removerClase (boton, 'opcion--correcta');
        removerClase (boton, 'opcion--incorrecta');
        removerClase (boton, 'deshabilitado');
        removerClase (boton, 'oculto');
    }
    return true;
}


//Función no ada que se usa como callBack en la función opcionSeleccionada()
//Y se encarga de escuchar un tipo de elemento dentro de un contenedor y ejemplo:
    // Escuchar los elementos de clase 'boton' dentro de un contenedor 'boton-contenedor'
//Devuelve el Id del elemento seleccionado dentro de un contenedor
//Nota: Se usas una promesa debido a que escucharElementos() es una funcion de naturaleza asincrona
 function elementoSeleccionado (elementoContenedor, claseElementos, evento) {
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
 function mostrarMensaje (textoMensaje, textoBoton) {
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
 function cargarPregunta(pregunta, tituloEncabezado, ImgPregunta, arregloBotones) {
    return new Promise (resolve=>{
        const{encabezado, opciones, imagen, tipo} = pregunta;

        escribir(tituloEncabezado, encabezado);
        pintar (ImgPregunta, imagen);

        if(tipo === 0) desordenar(opciones);

        for (const indice in arregloBotones) {
           escribir(arregloBotones[indice], letra(indice) + opciones[indice].texto);
        }

        if (pregunta.tipo === 1) {
            arregloBotones[2].classList.add("oculto");
            arregloBotones[3].classList.add("oculto");
        }

        resolve(true);
    })
}


//Se encarga de desordenar el orden de las preguntas
 function desordenar(arreglo) {
    let indiceActual = arreglo.length, valorTemporal, indiceAleatorio;

    // Mientras queden elementos a mezclar...
    while (0 !== indiceActual) {

        // Seleccionar un elemento sin mezclar...
        indiceAleatorio = Math.floor(Math.random() * indiceActual);
        indiceActual -= 1;

        // E intercambiarlo con el elemento actual
        valorTemporal = arreglo[indiceActual];
        arreglo[indiceActual] = arreglo[indiceAleatorio];
        arreglo[indiceAleatorio] = valorTemporal;
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
 function posicionOpcion (IdOpcion) {
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
 function esperarSegundos (tiempoSegundos){
    return new Promise(resolve => {
        let intervalo = setInterval(()=>{
            clearInterval(intervalo);
            resolve(true)
        },tiempoSegundos*1000);
    })
}

 function animation(elemento, animacion, tiempoSegundos){
    let texto = animacion + ' ' + tiempoSegundos + 's  ';
    elemento.style.animation = texto;

    return new Promise(resolve =>{
        let intervalo = setInterval(()=>{
            elemento.style.animationPlayState = 'paused';
            elemento.style.animation= 'none';
            clearInterval(intervalo);
            resolve(true);
        },tiempoSegundos*1000);
    })
}



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

    mostrarElementos([seccionLogin], true);

    function ingresar() {
        return new Promise (resolve =>{
            btnIngresar.addEventListener('click', function () {
                if(inputAlias.value.trim()){
                    let nuevoUsuario = new Usuario (inputAlias.value.trim());
                    let examen = new Examen ('Comidas del mundo', nuevoUsuario, preguntasCreadas);

                    const {tematica, usuario, preguntas} = examen;

                    async function mensaje(){
                        const promesa = await mostrarMensaje(`Bienvenid@ ${usuario.nombre}! A continuación se le presentará un examen sobre ${tematica} con ${preguntas.length} preguntas, la calificación va de 0 a 100 puntos`, 'Continuar')

                        resolve(examen);
                    }

                    mensaje();
                }else{
                    inputAlias.value = '';
                    mostrarMensaje('¡Debe ingresar un alias!', 'Aceptar');
                };
            });
        })
    };


    let Quiz = await ingresar();
    let {usuario, preguntas} = Quiz;
    mostrarElementos([seccionLogin], false);


    async function jugar() {

        mostrarElementos([seccionPreguntas], true);
        desordenar(Quiz.preguntas);



        for (const indice in preguntas) {
            const pregunta = preguntas[indice];
            escribir(numeroPregunta, (parseInt(indice)+1) + '/' + preguntas.length);
            restaurarElementos(btnsOpciones);

            await cargarPregunta(pregunta, encabezadoPregunta, imagen, btnsOpciones);

            const IdOpcionSeleccionada = await elementoSeleccionado(contenedorOpciones, 'btnOpcion' , 'click');
            console.log(IdOpcionSeleccionada);
            let {opciones} = pregunta;
            let indiceOpcionSeleccionada = posicionOpcion(IdOpcionSeleccionada);
            let opcionSeleccionada = opciones[indiceOpcionSeleccionada];
            pregunta.evaluar(indiceOpcionSeleccionada);

            await esperarSegundos(0.5);


            if (opcionSeleccionada.correcta === true){
                reemplazarClase(document.getElementById(IdOpcionSeleccionada),'opcion--correcta','opcion--incorrecta');
            } else {
                for (const indice in opciones) {
                    if(opciones[indice].correcta) {
                        reemplazarClase(btnsOpciones[indice],'opcion--correcta','opcion--incorrecta');
                    }else {
                        reemplazarClase(btnsOpciones[indice],'opcion--incorrecta','opcion--correcta');
                    }
                }
            }

            deshabilitarElementos(btnsOpciones);
            await esperarSegundos(2);
        }


        mostrarElementos([seccionPreguntas],false);
        mostrarElementos([seccionResultados],true);

        const {calificacion,preguntasCorrectas,preguntasIncorrectas,totalPreguntas} = Quiz.calificar();


        escribir(resultadoEncabezado,
            `Resultados del usuario ${usuario.nombre}: <br><br>`);
            escribir(resultadoTexto,
                `<strong>Calificación   :</strong> ${calificacion} puntos <br>
                <strong>Preguntas Buenas:</strong> ${preguntasCorrectas} <br>
                <strong>Preguntas Malas :</strong> ${preguntasIncorrectas} <br>
                <strong>Total Preguntas :</strong> ${totalPreguntas}`);

        async function repetirExamen(){
            this.removeEventListener('click', repetirExamen);
            mostrarElementos([seccionResultados]);
            await jugar();
        }

        function salirExamen(){
            this.removeEventListener('click', salirExamen);
            mostrarElementos([seccionResultados]);
            inputAlias.value = '';
            app();
        }

        btnJugarNuevamente.addEventListener('click', repetirExamen);
        btnSalir.addEventListener('click', salirExamen);

        return true;
    };


    await jugar();//Correr preguntas

})();


