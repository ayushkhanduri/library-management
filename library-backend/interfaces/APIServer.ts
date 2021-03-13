import { AbstractDatabase } from "./Database";

abstract class AbstractAPIServer {
    protected portNo: number;
    protected basename: string;
    protected database: AbstractDatabase;
    
    public abstract serve();
    public abstract healthCheck();
}