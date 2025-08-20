export class Fruta {
    private color: string;
    private peso: number; //gramos
    private esEstacional: boolean;

    //Sobrecarga de constructores
    constructor();
    constructor(color: string, peso: number, esEstacional: boolean);
    constructor(color?: string, peso?: number, esEstacional?: boolean) {
        this.color = color ?? '';
        this.peso = typeof peso === 'number' ? peso : 0; //typeof para evitar NaN
        this.esEstacional = esEstacional ?? false;
    }

    //Setters
    public setColor(color: string): void {
        this.color = color;
    }

    public setPeso(peso: number): void {
        if (peso <= 0) throw new Error('El peso debe ser un número positivo mayor que cero.');
        this.peso = peso;
    }

    public setEsEstacional(esEstacional: boolean): void {
        this.esEstacional = esEstacional;
    }

    //Getters
    public getColor(): string {
        return this.color;
    }

    public getPeso(): number {
        return this.peso;
    }

    public getEsEstacional(): boolean {
        return this.esEstacional;
    }

    //Regla del ejercicio
    public esComestible(): boolean {
        return this.peso < 200 && this.esEstacional;
    }

    //Helper para datos formatados
    public descripcion(): string {
        const estacional = this.esEstacional ? 'de estación' : 'fuera de estación';
        return `Fruta: ${this.color}, Peso: ${this.peso}g, Estacional: ${estacional}`;
    }

}

export function crearFruta() {
    console.log('--- Creando una fruta ---');

    const fruta1 = new Fruta();
    fruta1.setColor('Rojo');
    fruta1.setPeso(150);
    fruta1.setEsEstacional(true);

    console.log('Fruta 1: ', fruta1.descripcion());
    console.log('¿Es comestible? ', fruta1.esComestible());

    //construcción con parámetros
    const fruta2 = new Fruta('Amarillo', 220, false);
    console.log('Fruta 2: ', fruta2.descripcion());
    console.log('¿Es comestible? ', fruta2.esComestible());

}