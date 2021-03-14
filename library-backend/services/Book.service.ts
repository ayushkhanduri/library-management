import * as Entity from 'Entities';
import { CrudAbstract } from "../interfaces/Crud";
import { AbstractDatabase } from "../interfaces/Database";

export class BookService extends CrudAbstract {
    constructor(entity: string, database: AbstractDatabase) {
        super(entity, database);
    }

    create() {
    }

    delete() {

    }

    findById(id: string) {
        this.database.findById<Entity.Book>(this.entity, id);
    }

    findAll() {

    }

    update() {
        
    }
}