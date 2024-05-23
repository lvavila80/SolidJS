export class Curso {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    obtenerNombre(): string {
        return this.nombre;
    }
}
