import * as express from 'express';
import { AbstractAPIServer } from "../interfaces/APIServer";
import { AbstractDatabase } from '../interfaces/Database';
import { ExpressRouter } from './ExpressRouter';

export class ExpressAPIServer extends AbstractAPIServer {

    app = express();
    // tightly coupled because express router can only be used with Express server
    expressRouter: ExpressRouter = null;

    constructor() {
        super();
    }

    private connectToServerAsync = () => {
        return new Promise( (resolve, reject) => {
            console.log("connectToServerAsync");
            this.app.listen(this.portNo).on('listening',() => {
                console.log(`Listening to port ${this.portNo}`);
                resolve(true);
            }).on('error', reject);
        });
    }

    async serve() {
        try {
            await this.connectToServerAsync();
            this.healthCheck();
            return Promise.resolve(true);
        } catch (e) {
            return Promise.reject(false);
        }
    }

    healthCheck() {
        this.app.get('/api/health/check', (req, res) => {
            res.json( {
                status: 200
            });
        });
    }

    setupRoutes(database: AbstractDatabase) {
        this.expressRouter = new ExpressRouter(database);
        this.expressRouter.setupRoutes(database);
    }

}