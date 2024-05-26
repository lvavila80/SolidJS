import { Curso } from '../src/Tres/Curso';
import { CursoMatematicas } from '../src/Tres/CursoMatematicas';
import { CursoHistoria } from '../src/Tres/CursoHistoria';

function imprimirDescripcionCurso(curso: Curso) {
    console.log(curso.describirCurso());
}

// Crear instancias de cursos
let cursoGeneral = new Curso("General");
let cursoMatematicas = new CursoMatematicas();
let cursoHistoria = new CursoHistoria();

// Testear la sustitución
imprimirDescripcionCurso(cursoGeneral);
imprimirDescripcionCurso(cursoMatematicas);
imprimirDescripcionCurso(cursoHistoria);
