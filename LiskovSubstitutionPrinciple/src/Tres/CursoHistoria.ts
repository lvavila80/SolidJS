import { Curso } from './Curso';

export class CursoHistoria extends Curso {
    constructor() {
        super("Historia");
    }

    describirCurso(): string {
        return super.describirCurso() + " Cubre temas de historia mundial.";
    }
}
