export const API_CONSTANTS = {
    BOOK: {
        POST: '/book',
        SEARCH: (name='') => `/book?name=${name}`,
        FIND: (id='') => `/book/${id}`,
        PUT: '/book',
        DELETE: '/book',
        GET_ALL: '/books/all'
    }
}