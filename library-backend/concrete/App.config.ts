import { AbstractAPIServer } from "../interfaces/APIServer";
import { AbstractDatabase } from "../interfaces/Database";

export class AppConfig {
    
    private static RETRY_COUNT = 0;
    private static SERVER_CONNECTION_RETRIES: number = +(process.env.SERVER_RETRIES || 3);

    static initializeServer(apiServer: AbstractAPIServer) {
        return new Promise(async (resolve, reject) => {
            try {
                const response = await apiServer.serve();
                if (response) {
                    resolve(true);
                }
            } catch (e) {
                console.log("errr");
                AppConfig.RETRY_COUNT++;
                if (AppConfig.RETRY_COUNT < AppConfig.SERVER_CONNECTION_RETRIES) {
                    this.initializeServer(apiServer);
                } else {
                    reject(false);
                }
            }
        });
    }

    static async initializeDb(database: AbstractDatabase) {
        try {
            await database.connect();
            return Promise.resolve(true);
        } catch (e) {
            return Promise.reject(false);
        }

    }
}