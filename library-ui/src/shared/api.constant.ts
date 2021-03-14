export const API_CONSTANTS = {
    BOOK: {
        POST: '/book',
        FIND: (name = ':id') => `/book/${name}`,
        PUT: '/book',
        DELETE: '/book',
        GET_ALL: '/books/all'
    }
}