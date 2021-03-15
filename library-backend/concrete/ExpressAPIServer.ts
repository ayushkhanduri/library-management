import express from 'express';
import cors from 'cors';
import { AbstractAPIServer } from "../interfaces/APIServer";
import { AbstractDatabase } from '../interfaces/Database';
import { ExpressRouter } from './ExpressRouter';

export class ExpressAPIServer extends AbstractAPIServer {

    app: express.Application = express();
    // tightly coupled because express router can only be used with Express server
    expressRouter: ExpressRouter = null;

    private static WHITELISTED = ['http://localhost:3000'];
    constructor() {
        super();
    }

    private connectToServerAsync = () => {
        return new Promise( (resolve, reject) => {
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
            this.applyMiddleWares();
            return Promise.resolve(true);
        } catch (e) {
            return Promise.reject(false);
        }
    }

    private applyMiddleWares () {
        this.app.use(express.json());
        this.app.use(cors({
            origin: (origin: string, callback ) => {
                console.log(origin);
                if( ExpressAPIServer.WHITELISTED.indexOf(origin)!== -1 ) {
                    callback(null, true);
                } else {
                    callback(new Error('Not allowed by CORS'));
                }
            }
        }));
    }

    healthCheck(): void {
        this.app.get('/api/health/check', (req, res) => {
            res.json( {
                status: 200
            });
        });
    }

    setupAppRoutes(database: AbstractDatabase): void {
        this.expressRouter = new ExpressRouter(database,this.app);
        this.expressRouter.setupRoutes();
    }

}