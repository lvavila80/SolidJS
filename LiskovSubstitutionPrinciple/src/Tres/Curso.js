"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Curso = void 0;
var Curso = /** @class */ (function () {
    function Curso(nombre) {
        this.nombre = nombre;
    }
    Curso.prototype.describirCurso = function () {
        return "Este es un curso de ".concat(this.nombre, ".");
    };
    return Curso;
}());
exports.Curso = Curso;
