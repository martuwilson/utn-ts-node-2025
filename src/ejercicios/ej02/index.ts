export class Vehiculo {
    public marca: string;
    public modelo: string
    private patente: string;

    constructor(marca: string, modelo: string, patente: string) {
        this.marca = marca;
        this.modelo = modelo;
        this.patente = patente;
    }

    // Getter para la patente seguro con enmascaramiento
    public getPatente(): string {
        if(!this.patente || this.patente.length < 4) return '****'
    
        const inicio = this.patente.slice(0, 2);
        const fin = this.patente.slice(-2);
        return `${inicio}**${fin}`;
    }

    // Setter para la patente
    public setPatente(nuevaPatente: string): void {
        if(!nuevaPatente || nuevaPatente.length < 4) {
            throw new Error('Patente inválida');
        }
        this.patente = nuevaPatente.trim().toUpperCase();
    }
}

    // Funcion
    export function run() {
        const auto = new Vehiculo('Toyota', 'Yaris', 'PING0N7');

        console.log(`Marca: ${auto.marca}`);
        console.log(`Modelo: ${auto.modelo}`);
        console.log(`Patente: ${auto.getPatente()}`);
    }
        
