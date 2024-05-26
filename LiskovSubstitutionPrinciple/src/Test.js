"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Curso_1 = require("../src/Tres/Curso");
var CursoMatematicas_1 = require("../src/Tres/CursoMatematicas");
var CursoHistoria_1 = require("../src/Tres/CursoHistoria");
function imprimirDescripcionCurso(curso) {
    console.log(curso.describirCurso());
}
// Crear instancias de cursos
var cursoGeneral = new Curso_1.Curso("General");
var cursoMatematicas = new CursoMatematicas_1.CursoMatematicas();
var cursoHistoria = new CursoHistoria_1.CursoHistoria();
// Testear la sustitución
imprimirDescripcionCurso(cursoGeneral);
imprimirDescripcionCurso(cursoMatematicas);
imprimirDescripcionCurso(cursoHistoria);
