import { AppConfig } from './concrete/App.config';
import { ExpressAPIServer } from './concrete/ExpressAPIServer';
import { LowDB } from './database/LowDB';

const DB_LOCATION = "../store/" + process.env.DATABASE;

( async () => {
    try {
        const expressServer = new ExpressAPIServer();
        const lowDb = new LowDB(DB_LOCATION);
        await AppConfig.initializeServer(expressServer);
        await AppConfig.initializeDb(lowDb);
        expressServer.setupRoutes(lowDb);
    } catch(e) {
        console.log(e);
    }
}) ();