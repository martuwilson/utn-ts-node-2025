export class Cliente {
    private nombre: string;
    private apellido: string;
    private dni: string;

    constructor(nombre: string, apellido: string, dni: string) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
    }

    // Setter para el nombre, apellido y DNI
    public setNombre(nombre: string): void {
        this.nombre = nombre;
    }
    
    public setApellido(apellido: string): void {
        this.apellido = apellido;
    }

    public setDni(dni: string): void {
        this.dni = dni;
    }

    // Getter para mostrar el nombre, apellido y DNI
    public getDescription(): string {
        return `${this.nombre} ${this.apellido} - DNI: ${this.dni}`;
    }
}

export function run() {
    const cliente = new Cliente('Alfredo', 'Di Stefano', '12345678A');

    console.log(cliente.getDescription());

    // Actualizar los datos del cliente
    cliente.setNombre('Lionel');
    cliente.setApellido('Messi');
    cliente.setDni('87654321B');

    console.log(cliente.getDescription());
    // Mostrar los datos actualizados
    console.log(`Nombre actualizado: ${cliente.getDescription()}`);
}
