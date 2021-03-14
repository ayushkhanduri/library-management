import * as Entities from "../@types/entities";
import { CrudAbstract } from "../interfaces/Crud";
import { AbstractDatabase } from "../interfaces/Database";

export class BookService extends CrudAbstract {
    constructor(entity: string, database: AbstractDatabase) {
        super(entity, database);
    }

    public create() {
    }

    public delete() {

    }

    public async findById(id: string) {
        try {
            const result = await this.database.findById<Entities.Book>(this.entity, id);
            return Promise.resolve(result);
        } catch (e) {
            return Promise.reject(e);
        }
        
    }

    public async findAll() {
        try {
            const result = await this.database.findAll<Array<Entities.Book>>(this.entity);
            return Promise.resolve(result);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public update() {
        
    }
}