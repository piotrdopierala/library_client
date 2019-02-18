import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';
import { Book, Author } from './models/book';

@Injectable()
export class BooksService {
  private booksApiURL = 'http://localhost:8080/';

  constructor(private http: HttpClient) { }

  myData(): string {
    return 'This is my data from service';
  }

  getBookDefinitions() {
    return this.http.get<Object[]>(this.booksApiURL + 'Books');
  }

  getSingleBookDefinition(id: number): Observable<Object> {
    return this.http.get<Object>(this.booksApiURL + 'Book/' + `${id}`);
  }

  getSingleBookCopies(id: number): Observable<Object> {
    return this.http.get<Object>(this.booksApiURL + 'BookCopies/' + `${id}`)
  }

  showSingleBookDefinition(id: number): Book {
    var book: Book = new Book();
    this.getSingleBookDefinition(id).subscribe(rawBookData => {
      book.title = rawBookData['title'];
      book.id = rawBookData['id'];
      book.isbn = rawBookData['isbn'];
      book.pageCount = rawBookData['pageCount'];
      var publishedDate: Date = new Date();
      publishedDate.setFullYear(rawBookData['publishedDate'][0]);
      publishedDate.setMonth(rawBookData['publishedDate'][1] - 1);
      publishedDate.setDate(rawBookData['publishedDate'][2]);
      console.log(publishedDate.getDate());
      book.publishedDate = publishedDate;
      book.thumbnailUrl = rawBookData['thumbnailUrl']
      book.authors = rawBookData['authors'].map(rawAuthor => {
        return this.parseAuthor(rawAuthor);
      });
      book.categories = rawBookData['categories'];
      book.shortDescription = rawBookData['shortDescription'];
    });
    return book;
  }

  showSingleBookCopies(id: number): Book {
    return null;
  }

  showBookDefinitions(): Array<Book> {
    var books: Array<Book> = [];

    this.getBookDefinitions().subscribe((rawBooksData) => rawBooksData.map((rawBookData) => {
      var book: Book = new Book();
      book.title = rawBookData['title'];
      book.id = rawBookData['id'];
      book.isbn = rawBookData['isbn'];
      book.pageCount = rawBookData['pageCount'];
      //book.publishedDate = new Date()
      book.thumbnailUrl = rawBookData['thumbnailUrl'];
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
    author.firstNames = 'firstNames' in rawAuthor ? rawAuthor['firstNames'].split(" ") : '';
    author.lastName = 'lastName' in rawAuthor ? rawAuthor['lastName'] : '';
    return author;
  }

}
