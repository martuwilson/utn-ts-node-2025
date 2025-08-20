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

class Visitante {
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

class Guardia {
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

// Runner
export function run() {
  console.log('=== Ejercicio 8 ===');

  const persona = new Persona();
  persona.setNombre('Ada');
  persona.setApellido('Lovelace');

  const visitante = new Visitante();
  visitante.setNombre('Alan');
  visitante.setApellido('Turing');

  const guardia = new Guardia();
  guardia.setNombre('Grace');
  guardia.setApellido('Hopper');

  console.log('Persona  ->', persona.descripcion());
  console.log('Visitante->', visitante.descripcion());
  console.log('Guardia  ->', guardia.descripcion());
}
