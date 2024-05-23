import { Curso } from "./Curso";

export class Profesor {
    private nombre: string;

    constructor(nombre: string) {
        this.nombre = nombre;
    }

    enseñar(curso: Curso): void {
        console.log(`${this.nombre} está enseñando el curso de ${curso.obtenerNombre()}.`);
    }
}
