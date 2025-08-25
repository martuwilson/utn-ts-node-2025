
type Nivel = 'baja' | 'media' | 'alta' | 'excelente' | 'extrema';

/* class abstracta para toda embarcacion */
abstract class Barco { //abstract porque no se puede instanciar directamente osea new Barco()
    constructor(
        private nombre: string,
        private velocidadCrucero: number,
        private flotabilidad: Nivel,
        private solidez: Nivel,
        private estabilidad: Nivel,
        private maniobrabilidad: Nivel
    ){}

    public getNombre(): string { return this.nombre; }
    public getVelocidadCrucero(): number { return this.velocidadCrucero; }
    public getFlotabilidad(): Nivel { return this.flotabilidad; }
    public getSolidez(): Nivel { return this.solidez; }
    public getEstabilidad(): Nivel { return this.estabilidad; }
    public getManiobrabilidad(): Nivel { return this.maniobrabilidad; }

    protected setEstabilidad(n: Nivel) { this.estabilidad = n; } //protected porque solo las subclases deben modificarla
    protected setManiobrabilidad(n: Nivel) { this.maniobrabilidad = n; }

    public resumen(): string {
        return [
            `Nombre: ${this.getNombre()}`,
            `Velocidad Crucero: ${this.getVelocidadCrucero()}`,
            `Flotabilidad: ${this.getFlotabilidad()}`,
            `Solidez: ${this.getSolidez()}`,
            `Estabilidad: ${this.getEstabilidad()}`,
            `Maniobrabilidad: ${this.getManiobrabilidad()}`
        ].join('\n');
    }
}

class Acorazado extends Barco {
    constructor(
        nombre: string,
        velocidadCrucero: number,
        flotabilidad: Nivel,
        solidez: Nivel,
        estabilidad: Nivel,
        maniobrabilidad: Nivel,
        private blindaje: Nivel,
        private potenciaFuego: Nivel
    ) {
        super(nombre, velocidadCrucero, flotabilidad, solidez, estabilidad, maniobrabilidad);
    }

    public override resumen(): string {
        return `ACORAZADO -> ${super.resumen()} | Blindaje: ${this.blindaje} | Potencia de Fuego: ${this.potenciaFuego}`;
    }

}

class Destructor extends Barco {
    constructor(
        nombre: string,
        velocidadCrucero: number,
        flotabilidad: Nivel,
        solidez: Nivel,
        estabilidad: Nivel,
        maniobrabilidad: Nivel,
        private potenciaFuego: Nivel,
        private velocidadMaxima: number
    ) {
        super(nombre, velocidadCrucero, flotabilidad, solidez, estabilidad, maniobrabilidad);
        // Enunciado dice: velocidad maxica = muy estable y maniobrable
        this.setEstabilidad('alta');
        this.setManiobrabilidad('alta');
    }

    public override resumen(): string {
        return `DESTRUCTOR -> ${super.resumen()} | Potencia de Fuego: ${this.potenciaFuego} | Velocidad Máxima: ${this.velocidadMaxima}`;
    }

}

class BarcoHospital extends Barco {
    constructor(
        nombre = 'Sibelancia', capacidadPacientes = 75
    ){
        super(
            nombre,
            18,
            'excelente',
            'alta',
            'extrema',
            'media'
        );
        this.capacidadPacientes = capacidadPacientes;
    }

    private capacidadPacientes: number;

    public override resumen(): string {
        return `BARCO HOSPITAL -> ${super.resumen()} | Capacidad de Pacientes: ${this.capacidadPacientes}`;
    }
}

class LanchaMedica extends Barco {
    private motorFueraBorda = true;
    private gruaCapacidadKg = 300;

    constructor(
        nombre: string,
    ){
        super(
            nombre,
            35,
            'alta',
            'media',
            'baja',
            'media'
        )
    }

    public override resumen(): string {
        return `LANCHA MÉDICA -> ${super.resumen()} | Motor fuera de borda: ${this.motorFueraBorda ? 'sí' : 'no'} | Grúa: ${this.gruaCapacidadKg} kg`;
    }
}

export function run() {
  console.log('=== Ejercicio 15 — Flota del reino de Caballito ===');

  // Acorazados
  const a1 = new Acorazado(
    'Acorazado Caballito I',
    22,
    'alta',
    'alta',
    'alta',
    'media',
    'alta',        // blindaje
    'alta'         // potencia de fuego
  );

  // Destructores
  const d1 = new Destructor(
    'Destructor Pegaso',
    28,
    'alta',
    'media',
    'alta',        // a vel. máx será alta
    'alta',        // a vel. máx será alta
    'alta',        // potencia de fuego
    34             // vel. máx
  );

  // Barco hospital (único)
  const h1 = new BarcoHospital('Sibelancia', 75);

  // Lanchas médicas
  const l1 = new LanchaMedica('La gaucha');
  const l2 = new LanchaMedica('El gaucho');

  // Mostrar por pantalla
  [a1, d1, h1, l1, l2].forEach(b => console.log(b.resumen()));
}