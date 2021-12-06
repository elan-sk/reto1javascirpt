import {Pregunta} from './Pregunta.js';

export{preguntasCreadas};

//Creación de Preguntas =====================
const Pregunta1 = new Pregunta('¿Cuál de los siguientes platos es una comida típica del Chocó?',[
    {texto:'Bandeja Paisa',correcta:false},
    {texto:'Arroz con Longaniza',correcta:true},
    {texto:'Ajiaco',correcta:false},
    {texto:'Pizza',correcta:false}],
    'img/imagen_1.jpeg');

const Pregunta2 = new Pregunta('¿Cuál es el origen del siguiente platillo?',[
    {texto:'Colombia',correcta:false},
    {texto:'México',correcta:false},
    {texto:'Italia',correcta:true},
    {texto:'Francia',correcta:false}],
    'img/imagen_2.jpeg');

const Pregunta3 = new Pregunta('¿Cuál es el origen del siguiente platillo?',[
    {texto:'España',correcta:false},
    {texto:'Chile',correcta:false},
    {texto:'USA',correcta:false},
    {texto:'México',correcta:true}],
    'img/imagen_3.jpeg');

const Pregunta4 = new Pregunta('¿Cuál de los siguientes platos es una comida tipica de España?',[
    {texto:'Paella',correcta:true},
    {texto:'Croissant',correcta:false},
    {texto:'Pollo Frito',correcta:false},
    {texto:'Emparedado de Pavo',correcta:false}],
    'img/imagen_4.jpeg');

const Pregunta5 = new Pregunta('¿Cuál de los siguientes ingrediente NO hace parte de un sancocho?',[
    {texto:'Papa',correcta:false},
    {texto:'Tomate',correcta:false},
    {texto:'Lechuga',correcta:true},
    {texto:'Pollo',correcta:false}],
    'img/imagen_5.jpeg');

//arreglo de preguntas
var preguntasCreadas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5];