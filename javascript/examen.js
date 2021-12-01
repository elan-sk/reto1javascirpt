export {Examen};

class Examen {
    //Esperando metodos constructor de Yeicy.
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
       

        return {"Calificacion":this.calificacion, "PreguntaCorrectas":preguntasCorrectas, "PreguntaIncorrectas":preguntasIncorrectas, "TotalPreguntas":this.preguntas.length}
    }

    //Se encarga de desordenar el orden de las preguntas
    desordenarPreguntas () {
        this.preguntas.sort(function() { return Math.random() - 0.5 });
        return true;
    }

}