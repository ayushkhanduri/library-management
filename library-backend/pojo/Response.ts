export class ReqResponse<Data> {
    data: Data;
    status: Status;
    metaData?: any = null;
    constructor(data: Data, statusCode: number, statusMessage: string, metaData?: any) {
        this.data = data;
        this.metaData = metaData;
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

export class Pagination {
    pageNumber: number;
    isLastPage: boolean;

    constructor(pageNumber: number, isLastPage: boolean) {
        this.pageNumber = pageNumber;
        this.isLastPage = isLastPage;
    }
}