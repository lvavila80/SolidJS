export interface IEstudiante {
    inscribirCurso(curso: string): void;
    obtenerCursosInscritos(): string[];
}
