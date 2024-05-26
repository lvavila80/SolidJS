import { Persona } from './Persona';
import { IProfesor } from './IProfesor';

export class Profesor extends Persona implements IProfesor {
    private cursosAsignados: string[] = [];

    constructor(nombre: string) {
        super(nombre);
    }

    asignarCurso(curso: string): void {
        this.cursosAsignados.push(curso);
    }

    obtenerCursosAsignados(): string[] {
        return this.cursosAsignados;
    }
}
