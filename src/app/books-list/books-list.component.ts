import { Component, OnInit } from '@angular/core';
import { BooksService } from 'app/books-service.service';
import { Book } from 'app/models/book';


@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.css']
})
export class BooksListComponent implements OnInit {

  public booksDefinitions:Book[];

  constructor(private booksService:BooksService) {
  
  }

  ngOnInit() {
    this.booksDefinitions=this.booksService.showBookDefinitions();
  }

}
