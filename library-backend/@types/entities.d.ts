declare namespace Entities {
    export interface Book {
        isbn: string;
        title: string;
        subtitle: string;
        author: string,
        published: string;
        publisher: string;
        pages: number;
        tags: Array<string>;
        description: string;
        website: string
    }
}

export = Entities;