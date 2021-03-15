export const STATUS = {
    SUCCESS: {
        CODE: 200,
        MESSAGE: "Entity retrieved successfully"
    },
    ERROR: {
        CODE: 500,
        MESSAGE: "Internal server error"
    },
    NOT_FOUND: {
        CODE: 400, 
        MESSAGE: "Entity not found"
    },
    CREATED: {
        CODE: 201,
        MESSAGE: "Entity create successfully"
    },
    UPDATED: {
        CODE: 204,
        MESSAGE: "Entity updated successfully"
    }
}