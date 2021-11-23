export {Usuario};

class Usuario {

    //El constructor, es metodo especial encargado de recibir los parametros al crear un objeto de esta clase.
    constructor(name) {
        this.nombre = name; //creación y asignación del atributo nombre.
    }

    //metodo saludar
    saludar () {
        return alert("Hola, soy " + this.nombre);
    }
};

