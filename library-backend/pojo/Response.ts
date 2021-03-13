export class Response<Data> {
    data: Data;
    status: Status
    constructor(data: Data, statusCode: number, statusMessage: string) {
        this.data = data;
        this.status = new Status(statusCode, statusMessage);
    }
}

class Status {
    statusCode: number;
    statusMessage: string;

    constructor(statusCode: number, statusMessage: string) {
        this.statusMessage = statusMessage;
        this.statusCode = statusCode;
    }
}