import { Router } from 'express';
import { IBookRoutes } from '../constants/routes';
import { AbstractRouter } from "../interfaces/Router";

export class ExpressRouter extends AbstractRouter {
    
    protected setupBookRoutes(version: string, bookRoutes: IBookRoutes): void {
        const router = Router();
        router.get(`${version}${bookRoutes.READ}`, this.bookController.findById);
    }
}