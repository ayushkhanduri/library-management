import { AbstractDatabase } from "../interfaces/Database";
import * as path from 'path';
import * as low from 'lowdb';
import * as FileAsync from 'lowdb/adapters/FileAsync';
import { Schema } from "../@types/schema";

export class LowDB extends AbstractDatabase {

    connectionInstance: low.LowdbAsync<Schema.DB> = null;

    constructor(fileName: string) {
        super();
        this.dbName = fileName;
        this.connect();
    }

    public async connect() {
        try {
            const dbPath = path.resolve(`${__dirname}/${this.dbName}`);
            const adapter = new FileAsync<Schema.DB>(dbPath);
            this.connectionInstance = await low(adapter);
            return Promise.resolve(this.connectionInstance);
        } catch(e) {
            console.log(e);
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

    public async findById<T>(entity: string, id: string): Promise<T> {
        try {
            const response: T = await (this.connectionInstance.get(entity) as any).find({isbn: id}).value();
            return Promise.resolve(response);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    
    public async findAll<T>(entity:string): Promise<T> {
        try {
            const response: T = await this.connectionInstance.get(entity).value();
            return Promise.resolve(response);
        } catch(e) {
            return Promise.reject(e);
        }
    }
}