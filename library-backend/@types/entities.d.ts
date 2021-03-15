declare namespace Entities {
    export interface Book {
        isbn: string;
        title: string;
        subtitle: string;
        author: string,
        pages: number;
        description: string;
        website: string
    }
}

export = Entities;