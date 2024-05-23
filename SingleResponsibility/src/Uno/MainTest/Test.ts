import { Profesor } from './ClassSR/Profesor';
import { Curso } from './ClassSR/Curso';



// Crear una instancia de Curso
let cursoMatematicas = new Curso("Matemáticas");

// Crear una instancia de Profesor
let profesorJuan = new Profesor("Juan");

// El profesor enseña el curso
profesorJuan.enseñar(cursoMatematicas);