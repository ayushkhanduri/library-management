import { MapLike } from "typescript";

export as namespace ApiResponseType;

export interface Status {
    statusCode: number;
    statusMessage: string;
}
export interface Response<T> {
    data: T;
    status: Status
}

interface Pagination {
    pageNumber: number,
    isLastPage: boolean
}
export interface Metadata<M>  {
    metaData: M
}