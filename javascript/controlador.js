
export function escucharEventoId (id, evento, funcion) {
    let elemento = document.getElementById(id);
    elemento.addEventListener(evento, funcion);
}


export function escribir (id, contenido) {
    let elemento = document.getElementById(id);
    elemento.textContent = contenido;
    return true; 
}

export function mostrarElementos(arreglo, boolean) {
   let elementos = arreglo;
   let mostrar = boolean;

   for (const elemento of elementos) {
       if (mostrar) {
           if (elemento.classList.contains('oculto')){
                elemento.classList.remove('oculto');
            }
            elemento.classList.add('visible');
       } 
    
       if (!mostrar) {
           if (elemento.classList.contains('visible')){
                elemento.classList.remove('visible');
           }
           elemento.classList.add('oculto');
       };
   }


}

export function habilitarElementos(arreglo, boolean) {
 
    let elementos = arreglo;
    let habilitar = boolean;
 
    for (const elemento of elementos) {
        if (habilitar) {
            if (elemento.classList.contains('deshabilitado')){
                elemento.classList.remove('deshabilitado');
            } 
            elemento.disabled = false;
            elemento.classList.add('habilitado');
        } 
    
        if (!habilitar) {
            if (elemento.classList.contains('habilitado')){
                elemento.classList.remove('habilitado');
            } 
            elemento.disabled = true;
            elemento.classList.add('deshabilitado');
        };
    }
}

export function opcionSeleccionada () {

}