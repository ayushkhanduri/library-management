export as namespace ApiResponseType;

export interface Status {
    statusCode: number;
    statusMessage: string;
}
export interface Response<T> {
    data: T;
    status: Status
}