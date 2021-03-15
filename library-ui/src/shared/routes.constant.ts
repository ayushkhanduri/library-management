export const ROUTE_CONSTANTS = {
    home: '/',
    create: '/create',
    list: '/list',
    update: (id = ':id') => `/update/${id}`
}