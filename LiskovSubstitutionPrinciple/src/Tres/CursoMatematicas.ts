import { Curso } from './Curso';

export class CursoMatematicas extends Curso {
    constructor() {
        super("Matemáticas");
    }

    describirCurso(): string {
        return super.describirCurso() + " Cubre temas de álgebra y cálculo.";
    }
}
