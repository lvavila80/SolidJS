import { MySqlDatabase } from '../src/Cinco/MySqlDatabase';
import { Logger } from '../src/Cinco/Logger';
import { UniversityApp } from '../src/Cinco/UniversityApp';

const database = new MySqlDatabase();
const logger = new Logger();
const app = new UniversityApp(database, logger);

app.start();
app.stop();
