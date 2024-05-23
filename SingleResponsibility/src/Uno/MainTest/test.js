"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Profesor_1 = require("./ClassSR/Profesor");
var Curso_1 = require("./ClassSR/Curso");


var cursoMatematicas = new Curso_1.Curso("Matemáticas");

var profesorJuan = new Profesor_1.Profesor("Juan");

profesorJuan.enseñar(cursoMatematicas);
