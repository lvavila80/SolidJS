"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profesor_1 = require("./ClassSR/Profesor");
var Curso_1 = require("./ClassSR/Curso");
// Crear una instancia de Curso
var cursoMatematicas = new Curso_1.Curso("Matemáticas");
// Crear una instancia de Profesor
var profesorJuan = new Profesor_1.Profesor("Juan");
// El profesor enseña el curso
profesorJuan.enseñar(cursoMatematicas);
