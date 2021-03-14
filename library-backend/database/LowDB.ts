import { AbstractDatabase } from "../interfaces/Database";
import * as low from 'lowdb';
const FileAsync = require('lowdb/adapters/FileAsync');

export class LowDB extends AbstractDatabase {

    connectionInstance: any = null;

    constructor(fileName: string) {
        super();
        this.dbName = fileName;
        this.connect();
    }

    public async connect() {
        try {
            const adapter = new FileAsync(this.dbName);
            this.connectionInstance = await low(adapter);
            return Promise.resolve(this.connectionInstance);
        } catch(e) {
            Promise.reject(false);
        }
    }


    public async disconnect(): Promise<boolean> {
        try {
            this.flushAll();
            return Promise.resolve(true);
        } catch (e) {
            return Promise.reject(false);
        }    
    }

    public findById<T>(entity: string, id: string): T {
        const response: T = this.connectionInstance.get(entity).find({isbn: id});
        return response;
    }
    
}