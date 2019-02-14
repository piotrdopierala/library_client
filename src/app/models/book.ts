export class Book{
    id: number;
    title: string;
    isbn : string;
    pageCount: number;
    publishedDate: Date;
    thumbnailUrl: string;
    shortDescription: string;
    authors:Author[];
    categories:string[];
    constructor(){}
}

export class Author{
    firstNames: string;
    lastName: string;
}