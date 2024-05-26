"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Estudiante_1 = require("../src/Dos/Estudiante");
var Profesor_1 = require("../src/Dos/Profesor");
// Crear instancia de Estudiante
var estudiante1 = new Estudiante_1.Estudiante(1, 'Ana García');
console.log("Estudiante: ".concat(estudiante1.obtenerNombre(), ", ID: ").concat(estudiante1.obtenerId()));
// Crear instancia de Profesor
var profesor1 = new Profesor_1.Profesor(101, 'Carlos Pérez');
console.log("Profesor: ".concat(profesor1.obtenerNombre(), ", ID: ").concat(profesor1.obtenerId()));
