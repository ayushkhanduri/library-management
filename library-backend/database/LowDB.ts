import { AbstractDatabase } from "../interfaces/Database";
import * as path from 'path';
import low from 'lowdb';
import FileAsync from 'lowdb/adapters/FileAsync';
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

    public async filterByParams<T>(entity: string, name: string, params: any): Promise<T> {
        try {
            const response: T = await (this.connectionInstance.get(entity) as any).filter((item: any) =>{
                return !!Object.keys(params).some((key:string) => {
                    return item[key].toLowerCase().includes(name.toLowerCase())
                 } );
            }).value();
            return Promise.resolve(response);
        } catch (e) {
            return Promise.reject(e);
        }
    }
    
    public async findById<T>(entity: string, params: any): Promise<T> {
        try {
            const response: T = await (this.connectionInstance.get(entity) as any).find(params).value();
            return Promise.resolve(response);
        } catch(e) {
            return Promise.reject(e);
        }
    }
    public async findAll<T>(entity:string, start: number, end: number): Promise<T> {
        try {
            console.log(start);
            console.log(end);
            const response: T = await (this.connectionInstance.get(entity) as any).slice(start, end).value();
            return Promise.resolve(response);
        } catch(e) {
            return Promise.reject(e);
        }
    }

    public async update<T>(entity: string, searchParams: any, updateParams: any): Promise<T>{
        try {
            const response: T = await (this.connectionInstance.get(entity) as any).find(searchParams).assign(updateParams).write();
            return Promise.resolve(response);
        } catch (e) {
            return Promise.reject(e);
        }
    }

    public async create<T>(entity: string, body: any): Promise<T> {
        try {
            const response: T = await (this.connectionInstance.get(entity) as any).push(body).write();
            return Promise.resolve(response);
        } catch(e) {
            return Promise.reject(e);
        }
    }
}