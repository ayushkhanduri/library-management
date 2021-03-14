import * as Entities from "../@types/entities";
import { STATUS } from "../constants/status";
import { CrudAbstract } from "../interfaces/Crud";
import { ReqResponse } from "../pojo/Response";

export class BookController {
    private bookCrudOperations: CrudAbstract;

    constructor(bookCrudService: CrudAbstract) {
        this.bookCrudOperations = bookCrudService;
    }

    findAll = async (_: any, res: any): Promise<void> => {
        let response = null;
        try {
            let books: Array<Entities.Book> = ( await this.bookCrudOperations.findAll() as Array<Entities.Book> );
            response = new ReqResponse<Array<Entities.Book>>(books,STATUS.SUCCESS.CODE,STATUS.SUCCESS.MESSAGE);
            res.json({
                ...response
            })
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null,STATUS.ERROR.CODE,STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }
    
    findById = async (req: any ,res: any): Promise<void> => {
        let response = null;
        try {
            const { params: {id } } = req;
            const book: Entities.Book = ( await this.bookCrudOperations.findById(`${id}`) as Entities.Book );
            if (!book) {
                response = new ReqResponse<Entities.Book>(null,STATUS.NOT_FOUND.CODE,STATUS.NOT_FOUND.MESSAGE);
            } else {
                response = new ReqResponse<Entities.Book>(book,STATUS.SUCCESS.CODE,STATUS.SUCCESS.MESSAGE);
            }
            res.json({
                ...response
            });
        } catch (e) {
            response = new ReqResponse<Entities.Book>(null,STATUS.ERROR.CODE,STATUS.ERROR.MESSAGE);
            res.json({
                ...response
            })
        }
    }
}