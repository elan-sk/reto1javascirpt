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