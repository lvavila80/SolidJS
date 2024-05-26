"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estudiante_1 = require("../Cuatro/Estudiante");
var Profesor_1 = require("../Cuatro/Profesor");
// Crear instancia de Estudiante
var estudiante1 = new Estudiante_1.Estudiante('Ana García');
estudiante1.inscribirCurso('Matemáticas');
console.log("Estudiante: ".concat(estudiante1.obtenerNombre(), ", Cursos: ").concat(estudiante1.obtenerCursosInscritos().join(', ')));
// Crear instancia de Profesor
var profesor1 = new Profesor_1.Profesor('Carlos Pérez');
profesor1.asignarCurso('Historia');
console.log("Profesor: ".concat(profesor1.obtenerNombre(), ", Cursos Asignados: ").concat(profesor1.obtenerCursosAsignados().join(', ')));
