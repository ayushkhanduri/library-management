import { IBookRoutes, ROUTES } from "../constants/routes";
import { BookController } from "../controller/Book.controller";
import { BookService } from "../services/Book.service";
import { AbstractDatabase } from "./Database";

export abstract class AbstractRouter {
    protected bookController: BookController
    protected static BASE_ROUTE: string = ROUTES.BASENAME;

    constructor(database: AbstractDatabase) {
        this.setupControllers(database);
    }

    private setupControllers(database: AbstractDatabase) {
        const bookService = new BookService("books", database);
        this.bookController = new BookController(bookService);
    }
    
    public setupRoutes(database: AbstractDatabase) {
        ROUTES.VERSIONS.forEach((version) => {
            this.setupBookRoutes(version, ROUTES.BOOK);
        });
    }

    protected abstract setupBookRoutes(version: string, bookRoutes: IBookRoutes): void;
}