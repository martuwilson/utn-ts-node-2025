export class Articulo {
    private marca: string;
    private modelo: string

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    // Setter para la marca y modelo
    public setMarca(marca: string): void {
        this.marca = marca;
    }

    public setModelo(modelo: string): void {
        this.modelo = modelo;
    }

    // Getter para mostrar la marca y modelo 
    public getDescription(): string {
        return `${this.marca} ${this.modelo}`;
    }
}

export function run() {
    const articulo = new Articulo('Royal Einfield', 'Hunter 350');

    console.log(articulo.getDescription());
}