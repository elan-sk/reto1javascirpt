
export function escucharEventoId (id, evento, funcion) {
    let elemento = document.getElementById(id);
    elemento.addEventListener(evento, funcion);
    return true;
}


export function escribir (id, contenido) {
    let elemento = document.getElementById(id);
    elemento.textContent = contenido;
    return true; 
}

export function reemplazarClase (elemento, claseNueva, claseAntigua){
    if (elemento.classList.contains(claseAntigua)){
        elemento.classList.remove(claseAntigua);
    }
    elemento.classList.add(claseNueva);
}

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

function escucharBotones (contenedor) {
    const contenedorOpciones = document.getElementById(contenedor);
    
    let idElementoClick = contenedorOpciones.addEventListener("click", evento => {
        if  (evento.target.classList.contains("btnOpcion")){
            return console.log(evento.target.id);
        }
    })

    return idElementoClick;
}

export async function opcionSeleccionada () {
   const idElementoClick = escucharBotones("opciones-contenedor");
   return idElementoClick;
}

/*   const contenedorOpciones = document.getElementById("opciones-contenedor");
  
  let idElementoClick = contenedorOpciones.addEventListener("click", evento => {
      if  (evento.target.classList.contains("btnOpcion")){
          return console.log(evento.target.id);
      }
  })

  return idElementoClick; */