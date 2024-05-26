import { IDatabase } from './IDatabase';
import { Logger } from './Logger';

export class UniversityApp {
    private db: IDatabase;
    private logger: Logger;

    constructor(database: IDatabase, logger: Logger) {
        this.db = database;
        this.logger = logger;
    }

    start(): void {
        this.db.connect();
        this.logger.log('Universidad inicializada.');
    }

    stop(): void {
        this.db.disconnect();
        this.logger.log('Universidad detenida.');
    }
}
