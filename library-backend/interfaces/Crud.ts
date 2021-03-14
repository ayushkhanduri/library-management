import { Exception } from "../pojo/Exception";
import { AbstractDatabase } from "./Database";

export abstract class CrudAbstract {
    public entity: string;
    public database: AbstractDatabase;
    constructor(entityName: string, database: AbstractDatabase) {
        this.entity = entityName;
        this.database = database;
    }
    public abstract create(): void;
    public abstract update(): void;
    public abstract delete(): void;
    public abstract findByParams<T>(id: string, params: any): Promise<T | Exception>;
    public abstract findAll<T>(): Promise<T | Exception>;
}