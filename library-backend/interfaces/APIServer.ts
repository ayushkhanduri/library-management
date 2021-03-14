import { AbstractDatabase } from "./Database";

export abstract class AbstractAPIServer {
    protected portNo: number;
    protected healthCheckUrl = '/api/health/check';

    constructor() {
        this.portNo = +( process.env.PORT || 3000 );
    }
    public abstract serve(): Promise<boolean>;
    public abstract setupAppRoutes(database: AbstractDatabase): void;
    protected abstract healthCheck(): void;
}