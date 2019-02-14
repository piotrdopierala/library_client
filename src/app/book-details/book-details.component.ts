import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Book } from 'app/models/book';
import { BooksService } from 'app/books-service.service';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

  private id:number;
  private bookData:Book;

  constructor(private route: ActivatedRoute,
              private booksService: BooksService) {
    this.route.params.subscribe(params => this.id=params.id);
  }

  ngOnInit() {
    this.bookData=this.booksService.showSingleBookDefinition(this.id);
    console.log(this.bookData);
  }

}
