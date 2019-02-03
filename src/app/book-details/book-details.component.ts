import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.less']
})
export class BookDetailsComponent implements OnInit {

  private id:number;

  constructor(private route: ActivatedRoute) {
    console.log("From BookDetailsComponent Constructor:");
    this.route.params.subscribe(params => this.id=params.id);
  }

  ngOnInit() {
  }

}
