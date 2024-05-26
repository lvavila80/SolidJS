"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UniversityApp = void 0;
var UniversityApp = /** @class */ (function () {
    function UniversityApp(database, logger) {
        this.db = database;
        this.logger = logger;
    }
    UniversityApp.prototype.start = function () {
        this.db.connect();
        this.logger.log('Universidad inicializada.');
    };
    UniversityApp.prototype.stop = function () {
        this.db.disconnect();
        this.logger.log('Universidad detenida.');
    };
    return UniversityApp;
}());
exports.UniversityApp = UniversityApp;
