export class Ninja {
private arteMarcial: string;
private arma: string;
private fuerza: number;
private salto: number;

constructor(){
    this.arteMarcial = '';
    this.arma = '';
    this.fuerza = 0;
    this.salto = 0;
}

    //Setters

    public setArteMarcial(arteMarcial: string): void {
        this.arteMarcial = arteMarcial;
    }

    public setArma(arma: string): void {
        this.arma = arma;
    }

    public setFuerza(fuerza: number): void {
        if (fuerza < 0) throw new Error('La fuerza no puede ser negativa.');
        this.fuerza = fuerza;
    }

    public setSalto(salto: number): void {
        if (salto < 0) throw new Error('El salto no puede ser negativo.');
        this.salto = salto;
    }
    //Getters
    public getArteMarcial(): string {
        return this.arteMarcial;
    }

    public getArma(): string {
        return this.arma;
    }

    public getFuerza(): number {
        return this.fuerza;
    }

    public getSalto(): number {
        return this.salto;
    }

    //Metodos
    public saltar(multiplicador: number): void {
        if (multiplicador <= 0) throw new Error('El multiplicador debe ser un número positivo mayor que cero.');
        console.log(`Salto: ${this.salto * multiplicador}`);
    }

    public atacar(): void {
        console.log(`Atacando con ${this.arma} usando ${this.arteMarcial} con fuerza ${this.fuerza}.`);
    }

}

export function crearNinja() {
    console.log('--- Creando un ninja ---');

    const ninja1 = new Ninja();
    ninja1.setArteMarcial('Karate');
    ninja1.setArma('Katana');
    ninja1.setFuerza(80);
    ninja1.setSalto(5);

    const ninja2 = new Ninja();
    ninja2.setArteMarcial('Judo');
    ninja2.setArma('Nunchaku');
    ninja2.setFuerza(90);
    ninja2.setSalto(4);

    console.log('--- Ninja 1: ---');
    ninja1.saltar(2);
    ninja1.atacar();
    console.log('--- Ninja 2: ---');
    ninja2.saltar(3);
    ninja2.atacar();
}