interface ICrudRoutes {
    CREATE: string,
    READ: string,
    UPDATE: string,
    DELETE: string,
}

interface IFindAllRoutes {
    FINDALL: string;
}


interface IROUTES {
    BASENAME: string;
    BOOK: IBookRoutes;
    VERSIONS: Array<string>;
}

export const ROUTES: IROUTES = {
    BASENAME: '/api',
    BOOK: {
        CREATE: '/book',
        READ: '/book/:name',
        UPDATE: '/book',
        DELETE: '/book',
        FINDALL: '/books/all'
    },
    VERSIONS: ['/v1']
}

export interface IBookRoutes extends ICrudRoutes, IFindAllRoutes {

}