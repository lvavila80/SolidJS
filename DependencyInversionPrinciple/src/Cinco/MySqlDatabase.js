"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MySqlDatabase = void 0;
var MySqlDatabase = /** @class */ (function () {
    function MySqlDatabase() {
    }
    MySqlDatabase.prototype.connect = function () {
        console.log('Conexión a la base de datos MySQL establecida.');
    };
    MySqlDatabase.prototype.disconnect = function () {
        console.log('Desconectado de la base de datos MySQL.');
    };
    MySqlDatabase.prototype.query = function (sql) {
        console.log("Consultando: ".concat(sql));
        return []; // Simulación de una respuesta de la base de datos
    };
    return MySqlDatabase;
}());
exports.MySqlDatabase = MySqlDatabase;
