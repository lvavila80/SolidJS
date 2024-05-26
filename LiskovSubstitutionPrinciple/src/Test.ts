import { Curso } from '../PrincipioSustitucionLiskov/Curso';
import { CursoMatematicas } from '../PrincipioSustitucionLiskov/CursoMatematicas';
import { CursoHistoria } from '../PrincipioSustitucionLiskov/CursoHistoria';

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
