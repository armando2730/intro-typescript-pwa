
let nombres:string[]=['Mario','dario','juan']
console.log(nombres);
let datos:(boolean|number|string)[]=['Mario',23,true,'Lopez'];

console.log(datos);
datos.push(200);
datos.push('Mario');
datos.push(false);
console.log(datos);
//otra froma de crear arreglos
let arreglo: Array<number>=[1,2,3,4]

const nombre1:string='datos1';

interface Alumno{
    matricula:string,
    nombre:string,
    edad:number,
    email:string,
    materias?:string[]
}

const alumno:Alumno={
    matricula:'19002454',
    nombre:'Armando',
    edad:23,
    email:'gmail.com',
    materias:['ingles']
}
alumno.nombre='Felipe';
console.log(alumno)