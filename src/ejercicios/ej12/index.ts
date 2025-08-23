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

    public override presentarse(): string {
        return `Hola, soy el visitante ${this.getNombre()} ${this.getApellido()}.`;
    }
}

class Guardia extends Persona {
    // sobreescribir el método presentarse
    public override presentarse(): string {
        return `Hola, soy el guardia ${this.getNombre()} ${this.getApellido()}.`;
    }

    // version antigua
    /* public controlarDocumento(dni: number): string {
        return `Documento ${dni} chequeado.`;
    } */

    // version usando v:visitante
    public controlarDocumento(v: Visitante): string {
        return `Bienvenido, ${v.getNombre()} ${v.getApellido()}. Documento ${v.getDni()} chequeado.`;
    }
}

export function run() {
  console.log('=== Ejercicio 12 ===');

  const v = new Visitante();
  v.setNombre('Alan');
  v.setApellido('Turing');
  v.setDni(12345678);

  const g = new Guardia();
  g.setNombre('Grace');
  g.setApellido('Hopper');

  console.log('Visitante ->', v.presentarse());
  console.log('Guardia   ->', g.presentarse());
  console.log('Control documento ->', g.controlarDocumento(v));
}