import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Route} from '@angular/router';

const LIBRARY_ROUTES: Route[] = [
  {
    path: "Book/:id",
    component: null,
    resolve: {}
  }
];

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})
export class LibraryRoutingModule { }
