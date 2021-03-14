export abstract class AbstractDatabase {
    protected hostname: string;
    protected port: number;
    protected dbName: string;

    public abstract connect(): Promise<any>;

    public abstract disconnect(): Promise<boolean>;

    protected flushAll() {
        this.hostname = null;
        this.port = null;
        this.dbName = null;
    }

    public abstract findByParams<T>(entity: string, id: string, params: any): Promise<T>;
    public abstract findAll<T>(entity: string): Promise<T>;
}