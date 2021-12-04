//Muestra en un elemento HTML un texto determinado
export function escribir (id, texto) {
    let elemento = document.getElementById(id);
    elemento.textContent = texto;
    return true; 
}

export function pintar (id, srcImagen) {
    let elemento = document.getElementById(id);
    elemento.src = srcImagen;
    return true; 
}


export function obtenerTexto (id) {
    let elemento = document.getElementById(id);
    let texto = elemento.textContent;
    return texto; 
}

//Reemplaza una clase de un elemento HTML por otra. ejp: "oculto" por "visible"
//Nota: Se debe enviar como argumento el nombre de las clases sin el punto (.)
export function reemplazarClase (elemento, claseNueva, claseAntigua){
    if (elemento.classList.contains(claseAntigua) ){
        elemento.classList.remove(claseAntigua);
    }
    elemento.classList.add(claseNueva);
    return true;
}


//Muestra u oculta uno o varios elemento de HTML
//Nota: Como primer argumento se debe mandar un arreglo de elementos ejp: 
    //mostrarElementos(document.getElementsByClassName("botones"), false);
    //En el caso de que solo sea un elemento debes mandarlo como un arreglo ejp:
    //mostrarElementos([document.getElementById("boton1")], false);
//El segundo argumento es el que controla si se muestra o se oculta el elemento:
    //true = Mostrar
    //false = Ocultar 
export function mostrarElementos(arregloElementos, boolean) {
       let elementos = arregloElementos;
       let mostrar = boolean;
    
       for (const elemento of elementos) {
           if (mostrar) {
                reemplazarClase(elemento,"visible","oculto");
           }else {
               reemplazarClase(elemento, "oculto", "visible");
           }
       }

   return true;
}

//Habilita o Deshabilita uno o varios elemento de HTML
//Nota: Como primer argumento se debe mandar un arreglo de elementos ejp: 
    //mostrarElementos(document.getElementsByClassName("botones"), false);
    //En el caso de que solo sea un elemento debes mandarlo como un arreglo ejp:
    //mostrarElementos([document.getElementById("botones")], false);
//El segundo argumento es el que controla si se Habilita o se Deshabilita el elemento:
    //true = Habilitar
    //false = Deshabilitar 
export function habilitarElementos(arregloElementos, boolean) {
 
    let elementos = arregloElementos;
    let habilitar = boolean;
 
    for (const elemento of elementos) {
        if (habilitar) {
            reemplazarClase(elemento,"habilitado","deshabilitado");
            elemento.disabled = false;
        } else {
            reemplazarClase(elemento,"deshabilitado","habilitado");
            elemento.disabled = true;
        }
    }

    return true;
}

//Funcion no exportada que se usa como callBack en la funcion opcionSeleccionada()
//Y se encarga de escuchar un tipo de elemento dentro de un contenedor y ejemplo:
    // Escuchar los elementos de clase "boton" dentro de un contenedor "boton-contenedor"
function escucharElementos (contenedor, claseElementos, evento) {
    return new Promise (resolve => {
        const contenedorOpciones = document.getElementById(contenedor);
        
        let idElementoClick = contenedorOpciones.addEventListener(evento, evento => {
            if  (evento.target.classList.contains(claseElementos)){
                resolve (evento.target.id);
            }
        })
    })
}


//Devuelve el Id del elemento seleccionado dentro de un contenedor
//Nota: Se usas una promesa debido a que escucharElementos() es una funcion de naturaleza asincrona
export async function elementoSeleccionado (contenedor, claseElementos, evento) {
   const idElementoClick = escucharElementos(contenedor, claseElementos, evento);
   return idElementoClick;
}

//

//mostrar mensaje de al usuario.
export function mostrarMensaje (textoMensaje, textoBoton) {
    return new Promise (resolve => {
        let idContenedorMensaje = "seccionMensaje";
        let idTexto = "mensaje-texto";
        let idBoton = "mensaje-boton"; 
    
        mostrarElementos ([document.getElementById(idContenedorMensaje)], true);
    
        escribir(idTexto, textoMensaje);
        escribir(idBoton, textoBoton);

        document.getElementById(idBoton).addEventListener("click", function () {
            mostrarElementos ([document.getElementById(idContenedorMensaje)], false);
        });
    })
}


//Función de carga las pregunta en la página.
export function cargarPregunta(pregunta, tituloEncabezado, ImgPregunta, arregloBotones) {
    const{encabezado, opciones, imagen} = pregunta;

    escribir(tituloEncabezado.id, encabezado);
    pintar (imagen.id, ImgPregunta);
    let suma =0;
    for (const indice in arregloBotones) {
        /* console.log(typeof indice); */
        console.log(arregloBotones[indice].textContent);
        
       escribir(arregloBotones[indice].id, letra(indice) + opciones[indice].texto);
      suma++;
    }

    console.log(suma);

    return true;
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

export function letra (indice) {
    let letra;
    
    switch (parseInt(indice)) {
        case 0:
            letra = "A";
            break;
        case 1:
            letra = "B";
            break;
        case 2:
            letra = "C";
            break;
        case 3:
            letra = "D";
            break;
        default:
            letra= "no valido";
            break;
      }

    return letra +="). " ;
}