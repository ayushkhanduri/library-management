import { AbstractDatabase } from "../interfaces/Database";
import * as low from 'lowdb';
const FileAsync = require('lowdb/adapters/FileAsync');

export class LowDB extends AbstractDatabase {

    constructor(fileName: string) {
        super();
        this.dbName = fileName;
        this.connect();
    }

    public async connect() {
        try {
            const adapter: low.AdapterAsync = new FileAsync(this.dbName);
            const connectionInstance = await low(adapter);
            return Promise.resolve(connectionInstance);
        } catch(e) {
            Promise.reject(false);
        }
    }

    public async disconnect() {
        try {
            this.flushAll();
            return Promise.resolve(true);
        } catch (e) {
            return Promise.reject(false);
        }
        
    }
}