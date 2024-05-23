"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Profesor = void 0;
var Profesor = /** @class */ (function () {
    function Profesor(nombre) {
        this.nombre = nombre;
    }
    Profesor.prototype.enseñar = function (curso) {
        console.log("".concat(this.nombre, " est\u00E1 ense\u00F1ando el curso de ").concat(curso.obtenerNombre(), "."));
    };
    return Profesor;
}());
exports.Profesor = Profesor;
