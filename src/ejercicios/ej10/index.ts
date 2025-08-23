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

class Visitante extends Persona {}

class Guardia extends Persona {
    // sobreescribir el método presentarse
    public presentarse(): string {
        return `Hola, soy el guardia ${this.getNombre()} ${this.getApellido()}.`;
    }
}

export function run() {
  console.log('=== Ejercicio 10 ===');

  const v = new Visitante();
  v.setNombre('Alan');
  v.setApellido('Turing');

  const g = new Guardia();
  g.setNombre('Grace');
  g.setApellido('Hopper');

  console.log('Visitante ->', v.presentarse()); // usa Persona.presentarse()
  console.log('Guardia   ->', g.presentarse()); // usa Guardia.presentarse()
}