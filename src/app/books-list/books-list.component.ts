import { Component, OnInit } from '@angular/core';
import { BooksService } from 'app/books-service.service';
import { Book } from 'app/models/book';
import { Router } from '@angular/router';

@Component({
  selector: 'books-list',
  templateUrl: './books-list.component.html',
  styleUrls: ['./books-list.component.less']
})
export class BooksListComponent implements OnInit {

  public booksDefinitions:Book[];
  
  constructor(private booksService:BooksService,
              private router:Router) {
  }

  ngOnInit() {
    this.booksDefinitions=this.booksService.showBookDefinitions();
  }

  goToBookDetails(bookDef:Book){
    //this.router.navigate(['/Book',bookDef.id]);
  }

}
