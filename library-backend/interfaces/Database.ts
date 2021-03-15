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

    public abstract update<T>(entity: string, searchParams: any, updateParams: any): Promise<T>;
    public abstract create<T>(entity: string, body: any): Promise<T>;
    // @TODO : SHOULD BE MOVED TO A DIFFERNT INTERFACE
    public abstract filterByParams<T>(entity: string, id: string, params: any): Promise<T>;
    public abstract findAll<T>(entity: string): Promise<T>;
    public abstract findById<T>(entity: string, params: any): Promise<T>;
}