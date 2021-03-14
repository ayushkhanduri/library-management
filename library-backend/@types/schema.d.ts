import Entities from "./entities";

declare namespace Schema {
    export interface DB {
        books: Entities.Book
    }
}