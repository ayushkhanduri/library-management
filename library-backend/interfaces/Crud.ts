import { AbstractDatabase } from "./Database";

export abstract class CrudAbstract {
    public entity: string;
    public database: AbstractDatabase;
    constructor(entityName: string, database: AbstractDatabase) {
        this.entity = entityName;
        this.database = database;
    }
    public abstract create();
    public abstract update();
    public abstract delete();
    public abstract findById(id: string);
    public abstract findAll();
}