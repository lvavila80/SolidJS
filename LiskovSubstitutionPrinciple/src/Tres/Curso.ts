export class Curso {
    protected nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    describirCurso(): string {
        return `Este es un curso de ${this.nombre}.`;
    }
}
