import { IDatabase } from './IDatabase';

export class MySqlDatabase implements IDatabase {
    connect(): void {
        console.log('Conexión a la base de datos MySQL establecida.');
    }

    disconnect(): void {
        console.log('Desconectado de la base de datos MySQL.');
    }

    query(sql: string): any[] {
        console.log(`Consultando: ${sql}`);
        return [];  // Simulación de una respuesta de la base de datos
    }
}
