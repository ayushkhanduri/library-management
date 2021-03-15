import { Router } from 'express';
import { IBookRoutes } from '../constants/routes';
import { AbstractDatabase } from '../interfaces/Database';
import { AbstractRouter } from "../interfaces/Router";
import { Application } from 'express';

export class ExpressRouter extends AbstractRouter {
    
    application: Application

    constructor(database: AbstractDatabase, app: Application) {
        super(database);
        this.application = app;
    }

    protected setupBookRoutes(version: string, bookRoutes: IBookRoutes): void {
        const router = Router();
        router.get(`${bookRoutes.READ}`, this.bookController.filterByName);
        router.get(`${bookRoutes.FINDALL}`, this.bookController.findAll);
        router.get(`${bookRoutes.FIND_BY_ID}`, this.bookController.findById);
        router.put(`${bookRoutes.UPDATE}`, this.bookController.update);
        router.post(`${bookRoutes.CREATE}`,this.bookController.create);
        this.application.use(`${AbstractRouter.BASE_ROUTE}${version}`, router);
    }
}