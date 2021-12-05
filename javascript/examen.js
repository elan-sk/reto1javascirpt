export {Examen};

class Examen {
    //Constructor de Yeicy.
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
       

        return {
            calificacion:this.calificacion, 
            preguntasCorrectas:preguntasCorrectas, preguntasIncorrectas:preguntasIncorrectas,
            totalPreguntas:this.preguntas.length}
    }
}