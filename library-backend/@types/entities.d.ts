declare namespace Entities {
    export interface Book {
        isbn: string;
        title: string;
        subtitle: string;
        author: string,
        pages: string;
        description: string;
        website: string
    }
}

export = Entities;