import { CrudAbstract } from "../interfaces/Crud";

export class BookController {
    private bookCrudOperations: CrudAbstract;

    constructor(bookCrudService: CrudAbstract) {
        this.bookCrudOperations = bookCrudService;
    }

    findAll() {
        try {
            const response = this.bookCrudOperations.findAll();
        } catch (e) {

        }
    }
    
    findById(req,res) {
        try {
            console.log(req);
            const response = this.bookCrudOperations.findById("9781593275846");
            console.log(response);
        } catch (e) {

        }
    }
}