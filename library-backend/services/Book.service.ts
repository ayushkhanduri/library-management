import { CrudAbstract } from "../interfaces/Crud";
import { AbstractDatabase } from "../interfaces/Database";
import { Exception } from "../pojo/Exception";
import { v4 as uuid } from 'uuid';

export class BookService extends CrudAbstract {
    constructor(entity: string, database: AbstractDatabase) {
        super(entity, database);
    }

    public delete(): void {

    }

    public async findById<T>(id: string): Promise<T | Exception>{
        try {
            const result = await this.database.findById<T>(this.entity, {
                isbn: id
            });
            return Promise.resolve(result);
        } catch(e) {
            const exception = new Exception(`Error finding book with id ${id}`, "Service");
            return Promise.reject(exception);
        }
    }

    public async findByParams<T>(id: string, params: any): Promise<T | Exception> {
        try {
            const result = await this.database.filterByParams<T>(this.entity, id, params);
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

    public async update<T>(searchParams: any, updateParams: any): Promise<T | Exception> {
        try {
            const result = await this.database.update<T>(this.entity, searchParams, updateParams);
            return Promise.resolve(result);
        } catch(e) {
            const exception = new Exception("Error finding books", "Service");
            return Promise.reject(exception);
        }
    }

    public async create<T>(body: any): Promise<T | Exception> {
        try {
            const newBody = {
                ...body,
                isbn: uuid()
            }
            const result = await this.database.create<T>(this.entity, body);
            return Promise.resolve(result);
        } catch (e) {
            const exception = new Exception("Error finding books", "Service");
            return Promise.reject(exception);
        }
    }
}