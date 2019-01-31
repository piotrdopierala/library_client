export class Book{
    id: number;
    title: string;
    authors:Author[];
    categories:string[];
    constructor(){}
}

export class Author{
    firstNames: string;
    lastName: string;
}