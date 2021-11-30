//Se encarga de escuchar un evento de un Elemento HTML y ejecutar un funcion cuando se active dicho evento.
export function escucharEventoId (id, evento, funcion) {
    let elemento = document.getElementById(id);
    elemento.addEventListener(evento, funcion);
    return true;
}

//Muestra en un elemento HTML un texto determinado
export function escribir (id, contenido) {
    let elemento = document.getElementById(id);
    elemento.textContent = contenido;
    return true; 
}

//Reemplaza la clase de un elemento HTML por otra. ejp: "oculto" por "visible"
//Nota: Se debe enviar como argumento el nombre de la clase sin el punto (.)
export function reemplazarClase (elemento, claseNueva, claseAntigua){
    if (elemento.classList.contains(claseAntigua)){
        elemento.classList.remove(claseAntigua);
    }
    elemento.classList.add(claseNueva);
}

//Muestra u oculta uno o varios elemento de HTML
//Nota: Como primer argumento se debe mandar un arreglo de elementos ejp: 
    //mostrarElementos(document.getElementsByClassName("botones"), false);
    //En el caso de que solo sea un elemento debes mandarlo como un arreglo ejp:
    //mostrarElementos([document.getElementById("botones")], false);
//El segundo argumento es el controla si se muestra o se oculta el elemento:
    //true = Mostrar
    //false = Ocultar 
export function mostrarElementos(arreglo, boolean) {
   let elementos = arreglo;
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
//El segundo argumento es el controla si se Habilita o se Deshabilita el elemento:
    //true = Mostrar
    //false = Ocultar 
export function habilitarElementos(arreglo, boolean) {
 
    let elementos = arreglo;
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
function escucharBotones (contenedor) {
    const contenedorOpciones = document.getElementById(contenedor);
    
    let idElementoClick = contenedorOpciones.addEventListener("click", evento => {
        if  (evento.target.classList.contains("btnOpcion")){
            return console.log(evento.target.id);
        }
    })

    return idElementoClick;
}

//Se usas una promesa debido a que escucharBotones() es una funcion asincrona
export async function opcionSeleccionada () {
   const idElementoClick = escucharBotones("opciones-contenedor");
   return idElementoClick;
}

