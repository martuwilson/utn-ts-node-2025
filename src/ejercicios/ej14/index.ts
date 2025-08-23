interface Herramienta {
    getNombre(): string;
    getPeso(): number;
}

class SensorInfrarrojo implements Herramienta {
    getNombre(): string {
        return "Sensor Infrarrojo";
    }
    getPeso(): number {
        return 250;
    }
}

class Taser implements Herramienta {
    getNombre(): string {
        return "Taser";
    }
    getPeso(): number {
        return 300;
    }
}

class BrazoRobotico implements Herramienta {
    getNombre(): string {
        return "Brazo Robotico";
    }
    getPeso(): number {
        return 500;
    }
}

class Dron {
    private readonly velocidadBase = 5;
    private readonly alturaBase = 100;
    private readonly toleranciaPeso = 200;
    private herramientas: Herramienta[] = []; // Herramientas equipadas

    public agregarHerramienta(h: Herramienta): void {
        this.herramientas.push(h);
    }

    public limpiarHerramientas(): void {
        this.herramientas = [];
    }

    public pesoHerramientas(): number {
        return this.herramientas.reduce((total, h) => total + h.getPeso(), 0);
    }

    private tramosPenalizados(): number {
        const extraPeso = Math.max(0, this.pesoHerramientas() - this.toleranciaPeso);
        // 1 tramo cada 50grs extra sin contar fracciones
        return Math.floor(extraPeso / 50);
    }

    public getVelocidad(): number {
        const penalizaciones = this.tramosPenalizados();
        // 2% menos por tramo: v = base * (0.98 ^ tramos)
        const v = this.velocidadBase * Math.pow(0.98, penalizaciones);
        return Math.max(0, Number(v.toFixed(2))); // No puede ser negativa
    }

    public getAltura(): number {
        const penalizaciones = this.tramosPenalizados();
        // 5% menos por tramo: h = base * (0.95^n)
        const h = this.alturaBase * Math.pow(0.95, penalizaciones);
        return Math.max(0, Number(h.toFixed(2)));
    }

    public descripcionCarga(): string {
        if (this.herramientas.length === 0) return '(sin herramienta)';
        return this.herramientas.map(h => h.getNombre()).join(' + ');
    }

    public mostrarEstado(): void {
    console.log(`Herramienta(s): ${this.descripcionCarga()}`);
    console.log(`Peso total herramientas: ${this.pesoHerramientas()} g`);
    console.log(`Velocidad: ${this.getVelocidad()} m/s`);
    console.log(`Altura: ${this.getAltura()} m`);
    console.log('---');
  }
}

export function run() {
  console.log('=== Ejercicio 14 ===');

  const dron = new Dron();

  // Caso 1: Sensor infrarrojo (250 g) → 50 g extra => 1 tramo (2% vel, 5% altura)
  dron.limpiarHerramientas();
  dron.agregarHerramienta(new SensorInfrarrojo());
  dron.mostrarEstado();

  // Caso 2: Taser (300 g) → 100 g extra => 2 tramos (4% vel, 9.75% altura aprox)
  dron.limpiarHerramientas();
  dron.agregarHerramienta(new Taser());
  dron.mostrarEstado();

  // Caso 3: Brazo robótico (500 g) → 300 g extra => 6 tramos
  dron.limpiarHerramientas();
  dron.agregarHerramienta(new BrazoRobotico());
  dron.mostrarEstado();

  // Caso 4: Combinado (Sensor + Taser = 550 g) → 350 g extra => 7 tramos
  dron.limpiarHerramientas();
  dron.agregarHerramienta(new SensorInfrarrojo());
  dron.agregarHerramienta(new Taser());
  dron.mostrarEstado();

}

