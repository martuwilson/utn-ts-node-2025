class Persona {
    private nombre: string;
    private apellido: string;

    constructor() {
        this.nombre = '';
        this.apellido = '';
    }

    public setNombre(nombre: string): void {
        this.nombre = nombre.trim();
    }

    public setApellido(apellido: string): void {
        this.apellido = apellido.trim();
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getApellido(): string {
        return this.apellido;
    }

    public descripcion(): string {
        return `${this.nombre} ${this.apellido}`;
    }

}

class Visitante extends Persona {
    // Hereda todo de Persona
}

class Guardia extends Persona {
    // Hereda todo de Persona
}

export function run() {
  console.log('=== Ejercicio 9 ===');

  const v = new Visitante();
  v.setNombre('Alan');
  v.setApellido('Turing');

  const g = new Guardia();
  g.setNombre('Grace');
  g.setApellido('Hopper');

  console.log('Visitante ->', v.descripcion());
  console.log('Guardia   ->', g.descripcion());
}