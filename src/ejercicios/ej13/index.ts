interface Traccion {
    getTipo(): string;
    getPotenciaRestada(): number;
    getDistanciaMaxima(): number;
    getInformacionAdicional(): string;
}

class RuedaCaucho implements Traccion {
    getTipo(): string {
        return "Rueda de caucho";
    }
    getPotenciaRestada(): number {
        return 1;
    }
    getDistanciaMaxima(): number {
        return 100;
    }
    getInformacionAdicional(): string {
        return "Reemplazar al gastar";
    }
}

class Oruga implements Traccion {
    getTipo(): string {
        return "Oruga";
    }
    getPotenciaRestada(): number {
        return 3;
    }
    getDistanciaMaxima(): number {
        return 400;
    }
    getInformacionAdicional(): string {
        return "Sensores Meke-M0 para medir temperatura";
    }
}

class Robot{
    private numeroSerie: string;
    private potenciaBase: number;
    private traccion: Traccion;

    constructor(numeroSerie: string, potenciaBase: number, traccion: Traccion) {
        this.numeroSerie = numeroSerie;
        this.potenciaBase = potenciaBase;
        this.traccion = traccion;
    }

    public getPotenciaFinal(): number {
        return this.potenciaBase - this.traccion.getPotenciaRestada();
    }

    public mostrarInformacion(): void {
        console.log(`Número de Serie: ${this.numeroSerie}`);
        console.log(`Traccion: ${this.traccion.getTipo()}`);
        console.log(`Potencia Final: ${this.getPotenciaFinal()} hp`);
        console.log(`Autonomía: ${this.traccion.getDistanciaMaxima()} km`);
        console.log(`Información Adicional: ${this.traccion.getInformacionAdicional()}`);
    }

}

export function run() {
  console.log('=== Ejercicio 13 ===');

  const robotConRueda = new Robot('KT-2020-P', 10, new RuedaCaucho());
  const robotConOruga = new Robot('KT-2020-P', 10, new Oruga());

  console.log('\nRobot con rueda de caucho:');
  robotConRueda.mostrarInformacion();

  console.log('\nRobot con oruga:');
  robotConOruga.mostrarInformacion();
}