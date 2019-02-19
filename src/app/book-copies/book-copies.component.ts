import { Component, OnInit } from '@angular/core';
import { BookCopy } from 'app/models/bookCopy';
import { ActivatedRoute } from '@angular/router';
import { BooksService } from 'app/books-service.service';

@Component({
  selector: 'book-copies',
  templateUrl: './book-copies.component.html',
  styleUrls: ['./book-copies.component.less']
})
export class BookCopiesComponent implements OnInit {

  private id: number;
  private bookCopiesData: BookCopy[];

  constructor(private route: ActivatedRoute,
    private booksService: BooksService) {
    this.route.params.subscribe(params => this.id = params.id);
  }

  ngOnInit() {
    this.booksService.showSingleBookCopies(this.id);
  }

}
