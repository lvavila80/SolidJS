export interface IProfesor {
    asignarCurso(curso: string): void;
    obtenerCursosAsignados(): string[];
}
