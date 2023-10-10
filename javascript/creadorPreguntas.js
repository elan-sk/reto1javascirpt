import {Pregunta} from './Pregunta.js';

export{preguntasCreadas};

//Creación de Preguntas =====================
const Pregunta1 = new Pregunta('¿Cuanto es:?',[
    {texto:'3',correcta:true},
    {texto:'6',correcta:false},
    {texto:'1',correcta:false},
    {texto:'4',correcta:false}],
    'img/Picture1.png');

const Pregunta2 = new Pregunta('¿Cuanto es:?',[
    {texto:'6',correcta:true},
    {texto:'9',correcta:false},
    {texto:'12',correcta:false},
    {texto:'24',correcta:false}],
    'img/Picture2.png');

const Pregunta3 = new Pregunta('¿Cuanto es:?',[
    {texto:'9',correcta:true},
    {texto:'12',correcta:false},
    {texto:'21',correcta:false},
    {texto:'18',correcta:false}],
    'img/Picture3.png');

const Pregunta4 = new Pregunta('¿Cuanto es:?',[
    {texto:'12',correcta:true},
    {texto:'27',correcta:false},
    {texto:'9',correcta:false},
    {texto:'6',correcta:false}],
    'img/Picture4.png');

const Pregunta5 = new Pregunta('¿Cuanto es:?',[
    {texto:'15',correcta:true},
    {texto:'18',correcta:false},
    {texto:'21',correcta:false},
    {texto:'30',correcta:false}],
    'img/Picture5.png');

const Pregunta6 = new Pregunta('¿Cuanto es:?',[
    {texto:'18',correcta:true},
    {texto:'21',correcta:false},
    {texto:'6',correcta:false},
    {texto:'3',correcta:false}],
    'img/Picture6.png');

const Pregunta7 = new Pregunta('¿Cuanto es:?',[
    {texto:'21',correcta:true},
    {texto:'24',correcta:false},
    {texto:'27',correcta:false},
    {texto:'30',correcta:false}],
    'img/Picture7.png');

const Pregunta8 = new Pregunta('¿Cuanto es:?',[
    {texto:'24',correcta:true},
    {texto:'23',correcta:false},
    {texto:'20',correcta:false},
    {texto:'18',correcta:false}],
    'img/Picture8.png');

const Pregunta9 = new Pregunta('¿Cuanto es:?',[
    {texto:'27',correcta:true},
    {texto:'30',correcta:false},
    {texto:'15',correcta:false},
    {texto:'9',correcta:false}],
    'img/Picture9.png');

const Pregunta10 = new Pregunta('¿Cuanto es:?',[
    {texto:'30',correcta:true},
    {texto:'12',correcta:false},
    {texto:'15',correcta:false},
    {texto:'9',correcta:false}],
    'img/Picture10.png');

//arreglo de preguntas
var preguntasCreadas = [Pregunta1,Pregunta2,Pregunta3,Pregunta4,Pregunta5,Pregunta6,Pregunta7,Pregunta8,Pregunta9,Pregunta10];
