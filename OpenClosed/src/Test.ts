import { Estudiante } from '../src/Dos/Estudiante';
import { Profesor } from '../src/Dos/Profesor';

// Crear instancia de Estudiante
let estudiante1 = new Estudiante(1, 'Ana García');
console.log(`Estudiante: ${estudiante1.obtenerNombre()}, ID: ${estudiante1.obtenerId()}`);

// Crear instancia de Profesor
let profesor1 = new Profesor(101, 'Carlos Pérez');
console.log(`Profesor: ${profesor1.obtenerNombre()}, ID: ${profesor1.obtenerId()}`);
