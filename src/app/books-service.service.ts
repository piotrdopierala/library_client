import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Book, Author } from './models/book';

@Injectable()
export class BooksService {

  private bookDefinitionsURL = 'http://localhost:8080/Books';

  constructor(private http: HttpClient) { }

  myData(): string {
    return 'This is my data from service';
  }

  getBookDefinitions() {
    return this.http.get<Object[]>(this.bookDefinitionsURL);
  }

  showBookDefinitions(): Array<Book> {
    var books: Array<Book> = [];

    this.getBookDefinitions().subscribe((rawBooksData) => rawBooksData.map((rawBookData) => {
      var book: Book = new Book();
      book.title = rawBookData['title'];
      book.id = rawBookData['id'];
      book.authors = rawBookData['authors'].map(rawAuthor => {
        return this.parseAuthor(rawAuthor);
      });
      book.categories = rawBookData['categories'];
      books.push(book);
    }
    ))
    return books;
  }

  private parseAuthor(rawAuthor): Author {
    var author: Author = new Author();
    author.firstNames='firstNames' in rawAuthor ? rawAuthor['firstNames'].split(" "): '';
    author.lastName='lastName' in rawAuthor ? rawAuthor['lastName']:'';    
    return author;
  }

}
