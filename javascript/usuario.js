export {Usuario};

class Usuario {

    //El constructor, es metodo especial encargado de recibir los parametros al crear un objeto de esta clase.
    constructor(nombre, apellido, anoNacimiento) {
        this.nombre = nombre; 
        this.apellido = apellido;
        this.anoNacimiento = anoNacimiento;
        this.anoActual = 2021;
    }

    //metodo saludar
    saludar () {
        return alert("Hola, soy " + this.nombre + " " + this.apellido);
    }

    edad () {
        return alert (this.anoActual - this.anoNacimiento);
    }
};

