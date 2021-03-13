export abstract class CrudAbstract {
    public entity: string;
    constructor(entityName: string) {
        this.entity = entityName;
    }
    public abstract create();
    public abstract update();
    public abstract delete();
    public abstract findById();
    public abstract findAll();
}