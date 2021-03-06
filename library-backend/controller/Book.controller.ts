import * as Entities from "../@types/entities";
import { STATUS } from "../constants/status";
import { CrudAbstract } from "../interfaces/Crud";
import { ReqResponse, Pagination } from "../pojo/Response";

export class BookController {
    private bookCrudOperations: CrudAbstract;

    constructor(bookCrudService: CrudAbstract) {
        this.bookCrudOperations = bookCrudService;
    }

    findAll = async (req: any, res: any): Promise<void> => {
        let response = null;
        try {
            const { query: { page } } = req;
            let books: Array<Entities.Book> = (await this.bookCrudOperations.findAll(+page) as Array<Entities.Book>);
            response = new ReqResponse<Array<Entities.Book>>(books, STATUS.SUCCESS.CODE, STATUS.SUCCESS.MESSAGE);
            if (!books.length) {
                const pagination = new Pagination(+page, true);
                response = new ReqResponse<Array<Entities.Book>>(books, STATUS.SUCCESS.CODE, STATUS.SUCCESS.MESSAGE, pagination);
            } else {
                const pagination = new Pagination(+page, false);
                response = new ReqResponse<Array<Entities.Book>>(books, STATUS.SUCCESS.CODE, STATUS.SUCCESS.MESSAGE, pagination);
            }
            res.json({
                ...response
            })
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null, STATUS.ERROR.CODE, STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }

    filterByName = async (req: any, res: any): Promise<void> => {
        let response = null;
        try {
            const { query: { name } } = req;
            const book: Array<Entities.Book> = (await this.bookCrudOperations.findByParams<Array<Entities.Book>>(`${name}`, {
                title: `${name}`,
                author: `${name}`,
                description: `${name}`
            }) as Array<Entities.Book>);
            response = new ReqResponse<Array<Entities.Book>>(book, STATUS.SUCCESS.CODE, STATUS.SUCCESS.MESSAGE);
            res.json({
                ...response
            });
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null, STATUS.ERROR.CODE, STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }

    findById = async (req: any, res: any) => {
        let response = null;
        try {
            const { params: { id } } = req;
            const book: Entities.Book = (await this.bookCrudOperations.findById<Entities.Book>(id) as Entities.Book);
            if (!book) {
                response = new ReqResponse<Entities.Book>(null, STATUS.NOT_FOUND.CODE, STATUS.NOT_FOUND.MESSAGE);
            } else {
                response = new ReqResponse<Entities.Book>(book, STATUS.SUCCESS.CODE, STATUS.SUCCESS.MESSAGE);
            }
            res.json({
                ...response
            });
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null, STATUS.ERROR.CODE, STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }

    update = async (req: any, res: any) => {
        let response = null;
        try {
            const { body } = req;
            const book: Entities.Book = (await this.bookCrudOperations.update<Entities.Book>({
                isbn: body.isbn
            }, body) as Entities.Book);
            response = new ReqResponse<Entities.Book>(null, STATUS.UPDATED.CODE, STATUS.UPDATED.MESSAGE);
            res.json({
                ...response
            });
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null, STATUS.ERROR.CODE, STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }

    create = async (req: any, res: any) => {
        let response = null;
        try {
            const { body } = req;
            const book: Entities.Book = (await this.bookCrudOperations.create<Entities.Book>(body) as Entities.Book);
            response = new ReqResponse<Entities.Book>(book, STATUS.CREATED.CODE, STATUS.CREATED.MESSAGE);
            res.json({
                ...response
            });
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null, STATUS.ERROR.CODE, STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }
}