// Declaración de la clase Persona
export class Persona {
    constructor(
        public nombre: string, // es public porque se accede directamente a la propiedad
        public apellido: string
    ){}
}


// Funcion que ejecuta el ejemplo
export function run(){
    const persona = new Persona('Enzo', 'Fernández');
    console.log(`Nombre: ${persona.nombre}`);
    console.log(`Apellido: ${persona.apellido}`);
}