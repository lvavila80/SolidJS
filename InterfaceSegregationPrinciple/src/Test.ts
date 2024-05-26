import { Estudiante } from '../PrincipioSegregacionInterfaces/Estudiante';
import { Profesor } from '../PrincipioSegregacionInterfaces/Profesor';

// Crear instancia de Estudiante
let estudiante1 = new Estudiante('Ana García');
estudiante1.inscribirCurso('Matemáticas');
console.log(`Estudiante: ${estudiante1.obtenerNombre()}, Cursos: ${estudiante1.obtenerCursosInscritos().join(', ')}`);

// Crear instancia de Profesor
let profesor1 = new Profesor('Carlos Pérez');
profesor1.asignarCurso('Historia');
console.log(`Profesor: ${profesor1.obtenerNombre()}, Cursos Asignados: ${profesor1.obtenerCursosAsignados().join(', ')}`);
