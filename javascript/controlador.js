//Se encarga de escuchar un evento de un Elemento HTML y ejecutar un funcion cuando se active dicho evento.
export function escucharEventoId (id, evento, funcion) {
    return new Promise((resolve, reject) =>{
        let elemento = document.getElementById(id);
    
        if (elemento.addEventListener) {
            elemento.addEventListener(evento, funcion);
            resolve(true);
        } else {
             reject(true);
        }
    })
}

//Muestra en un elemento HTML un texto determinado
export function escribir (id, texto) {
    let elemento = document.getElementById(id);
    elemento.textContent = texto;
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
    if (elemento.classList.contains(claseAntigua)){
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
    const contenedorOpciones = document.getElementById(contenedor);
    
    let idElementoClick = contenedorOpciones.addEventListener(evento, evento => {
        if  (evento.target.classList.contains(claseElementos)){
            return console.log(evento.target.id);
        }
    })

    return idElementoClick;

    
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
    let idContenedorMensaje = "mensaje";
    let idTexto = "mensaje-texto";
    let idBoton = "mensaje-boton"; 

    mostrarElementos ([document.getElementById(idContenedorMensaje)], true);

    escribir(idTexto, textoMensaje);
    escribir(idBoton, textoBoton);
}

export function cerrarMensaje () {
    let idContenedorMensaje = "mensaje";
    mostrarElementos ([document.getElementById(idContenedorMensaje)], false);
    return true;
}

/*  function resolveAfter2Seconds() {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve('resolved');
      }, 15000);
    });
  }
  
  export async function asyncCall() {
    console.log('calling');
    const result = await resolveAfter2Seconds();
    console.log(result);
    // expected output: "resolved"
  }
   */
    