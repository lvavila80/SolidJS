import { Persona } from './Persona';
import { IEstudiante } from './IEstudiante';

export class Estudiante extends Persona implements IEstudiante {
    private cursosInscritos: string[] = [];

    constructor(nombre: string) {
        super(nombre);
    }

    inscribirCurso(curso: string): void {
        this.cursosInscritos.push(curso);
    }

    obtenerCursosInscritos(): string[] {
        return this.cursosInscritos;
    }
}
