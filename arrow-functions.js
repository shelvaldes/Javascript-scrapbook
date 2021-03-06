var gerardo ={
    nombre: "Gerardo",
    apellido: "Morán",
    edad: 28,
    ingeniero: false,
    cocinero: false,
    cantante: false,
    dj: false,
    pianista: false,
    futbol: true
}
var padme ={
    nombre: "Padme",
    apellido: "Hernández Valdés",
    edad: 7
}



const MAYORIA_DE_EDAD = 18


//arrow function
//

//desestructurada
const esMayorDeEdad = ({ edad }) => edad >= MAYORIA_DE_EDAD



function imprimirSiEsMayorDeEdad(persona){
    if (esMayorDeEdad(persona)){
        console.log(`${persona.nombre} es mayor de edad.`);
    }else{
        console.log(`${persona.nombre} es un queso.`);
    }
}
imprimirSiEsMayorDeEdad(padme);
imprimirSiEsMayorDeEdad(gerardo);

function permitirAcceso(persona){
    if (!esMayorDeEdad(persona)) {
        console.log("ACCESO DENEGADO");
    }else{
        console.log("Acceso permitido");
    }
}

permitirAcceso(padme);
permitirAcceso(gerardo);


//función esmenordeedad como arrow function y que retorne la negación a la llamada es mayor de edad

const esMenorDeEdad = ({edad}) => edad <  MAYORIA_DE_EDAD