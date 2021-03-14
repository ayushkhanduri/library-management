import * as Entities from "../@types/entities";
import { CrudAbstract } from "../interfaces/Crud";
import { AbstractDatabase } from "../interfaces/Database";
import { Exception } from "../pojo/Exception";

export class BookService extends CrudAbstract {
    constructor(entity: string, database: AbstractDatabase) {
        super(entity, database);
    }

    public create(): void {
    }

    public delete(): void {

    }

    public async findById<T>(id: string): Promise<T | Exception> {
        try {
            const result = await this.database.findById<T>(this.entity, id);
            return Promise.resolve(result);
        } catch (e) {
            const exception = new Exception(`Error finding book with id ${id}`, "Service");
            return Promise.reject(exception);
        }
        
    }

    public async findAll<T>(): Promise<T | Exception> {
        try {
            const result = await this.database.findAll<T>(this.entity);
            return Promise.resolve(result);
        } catch (e) {
            const exception = new Exception("Error finding books", "Service");
            return Promise.reject(exception);
        }
    }

    public update(): void {
        
    }
}