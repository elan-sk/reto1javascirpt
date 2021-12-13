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