class Persona {
    private nombre: string;
    private apellido: string;

    constructor() {
        this.nombre = '';
        this.apellido = '';
    }

    public getNombre(): string {
        return this.nombre;
    }
    
    public getApellido(): string {
        return this.apellido;
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public presentarse(): string {
        return `Hola, mi nombre es ${this.nombre} ${this.apellido}.`;
    }

}

class Visitante extends Persona {
    private dni: number;

    constructor() {
        super();
        this.dni = 0;
    }

    public getDni(): number {
        return this.dni;
    }
    public setDni(dni: number): void {
        this.dni = dni;
    }
}

class Guardia extends Persona {
    // sobreescribir el método presentarse
    public presentarse(): string {
        return `Hola, soy el guardia ${this.getNombre()} ${this.getApellido()}.`;
    }

    public controlarDocumento(dni: number): string {
        return `Documento ${dni} chequeado.`;
    }
}

export function run() {
  console.log('=== Ejercicio 11 ===');

  const visitante = new Visitante();
  visitante.setNombre('Alan');
  visitante.setApellido('Turing');
  visitante.setDni(12345678);

  const guardia = new Guardia();
  guardia.setNombre('Grace');
  guardia.setApellido('Hopper');

  console.log('Visitante ->', visitante.presentarse(), '| DNI:', visitante.getDni());
  console.log('Guardia   ->', guardia.presentarse());
  console.log('Guardia controla documento:', guardia.controlarDocumento(visitante.getDni()));
}