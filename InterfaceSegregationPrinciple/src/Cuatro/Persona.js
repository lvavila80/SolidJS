"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Persona = void 0;
var Persona = /** @class */ (function () {
    function Persona(nombre) {
        this.nombre = nombre;
    }
    Persona.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    return Persona;
}());
exports.Persona = Persona;
