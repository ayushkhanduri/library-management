import { CrudAbstract } from "../interfaces/Crud";

export class BookController {
    private bookCrudOperations: CrudAbstract;

    constructor(bookCrudService: CrudAbstract) {
        this.bookCrudOperations = bookCrudService;
    }

    findAll() {
        try {
            const response = this.bookCrudOperations.findById();
        } catch (e) {

        }
    }
}