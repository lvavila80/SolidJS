"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
exports.Estudiante = void 0;
var MiembroUniversitario_1 = require("./MiembroUniversitario");
var Estudiante = /** @class */ (function (_super) {
    __extends(Estudiante, _super);
    function Estudiante(id, nombre) {
        var _this = _super.call(this) || this;
        _this.id = id;
        _this.nombre = nombre;
        return _this;
    }
    Estudiante.prototype.obtenerId = function () {
        return this.id;
    };
    Estudiante.prototype.obtenerNombre = function () {
        return this.nombre;
    };
    return Estudiante;
}(MiembroUniversitario_1.MiembroUniversitario));
exports.Estudiante = Estudiante;
