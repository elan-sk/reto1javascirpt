
export function ejecutarFuncionId (id, evento, funcion) {
    let elemento = document.getElementById(id);
    elemento.addEventListener(evento, funcion);
}


export function pintar (id, contenido) {
    let elemento = document.getElementById(id);
    elemento.textContent = contenido;
    return true; 
}

export function mostrarElementos(arreglo, boolean) {
   let elementos = arreglo;
   let mostrar = boolean;

   for (const elemento of elementos) {
       
       if (mostrar) {
           console.log("Mostrar: ", mostrar)
           elemento.classList.contains('oculto')
           if (elemento.classList.contains('oculto')){
               elemento.classList.remove('oculto');
               elemento.classList.add('visible');
           } else {
               elemento.classList.add('visible');
           }
       } 
    
       if (!mostrar) {
           if (elemento.classList.contains('visible')){
               elemento.classList.remove('visible');
               elemento.classList.add('oculto');
           } else {
               elemento.classList.add('oculto');
           }
       };

   }


}

export function habilitarElementos(elementos, boolean) {
 
    let elementos = arreglo;
    let habilitar = boolean;
 
    if (habilitar) {
        console.log("Mostrar: ", mostrar)
        elemento.classList.contains('oculto')
        if (elemento.classList.contains('oculto')){
            elemento.classList.remove('oculto');
            elemento.classList.add('visible');
        } else {
            elemento.classList.add('visible');
        }
    } 
 
    if (!habilitar) {
        if (elemento.classList.contains('visible')){
            elemento.classList.remove('visible');
            elemento.classList.add('oculto');
        } else {
            elemento.classList.add('oculto');
        }
    };

}

export function opcionSeleccionada () {
    let opciones = document.getElementsByClassName("btnOpcion");
    let idOpcionSeleccionada = "";

    for (const opcion of opciones) {
        idOpcionSeleccionada += opcion.name;
    }


    return idOpcionSeleccionada; 
}