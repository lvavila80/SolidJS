import { MiembroUniversitario } from './MiembroUniversitario';

export class Estudiante extends MiembroUniversitario {
    private id: number;
    private nombre: string;

    constructor(id: number, nombre: string) {
        super();
        this.id = id;
        this.nombre = nombre;
    }

    obtenerId(): number {
        return this.id;
    }

    obtenerNombre(): string {
        return this.nombre;
    }
}
