export class Cine {
    private pelicula: string;
    private horario: string;

    constructor(pelicula?: string, horario?: string) {
        this.pelicula = pelicula || "";
        this.horario = horario || "";
    }

    public setPelicula(pelicula: string): void {
        this.pelicula = pelicula;
    }

    public setHorario(horario: string): void {
        this.horario = horario;
    }

    public getPelicula(): string {
        return this.pelicula;
    }

    public getHorario(): string {
        return this.horario;
    }

    //Helper para mostrar la información de la película y el horario
    public mostrarInformacion(): string {
        return `Película: ${this.pelicula}, Horario: ${this.horario}`;
    }
}

export function run() {
    console.log("Ejercicio 05: Cine");

    //Primera instancia
    const cineA = new Cine();
    cineA.setPelicula("Inception");
    cineA.setHorario("20:00");

    //2da instancia
    const cineB = new Cine();
    cineB.setPelicula("Interstellar");
    cineB.setHorario("22:00");

    //Mostrar información de las películas
    console.log('--- Información de las películas ---');
    console.log('Cine A:', cineA.mostrarInformacion());
    console.log('Cine B:', cineB.mostrarInformacion());

    //Cambiar película y horario de cineA
    cineA.setPelicula("The Matrix");
    cineA.setHorario("18:00");

    console.log('--- Tras modificar SOLO Cine A ---');
    console.log('Cine A ->', cineA.mostrarInformacion());
    console.log('Cine B ->', cineB.mostrarInformacion());

  // Conclusión explícita
  console.log(
    '\nConclusión: las dos instancias mantienen estados independientes; ' +
    '`new` creó objetos distintos. Independiente en memoria.',
  );
}

