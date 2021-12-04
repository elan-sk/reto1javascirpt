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
        this.opcionSeleccionada = opcionSeleccionada;
        this.respondido = true;

        if (this.opcionSeleccionada === this.opcionCorrecta){
            this.evaluacion = true;
            console.log("Muy bien! acertaste");
            return true;
        } else {
            this.evaluacion = false;
            console.log("Que mal! Te equivocaste");
            return false; 
        }
    }
};