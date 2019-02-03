import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BooksListComponent } from './books-list/books-list.component';

const LIBRARY_ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'List'
  },
  {
    path: 'List',
    component: BooksListComponent,
    resolve: {}
  },
  {
    path: "Book/:id",
    component: BookDetailsComponent,
    resolve: {}
  },
  {
    path: '**',
    redirectTo: 'List'
  }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(LIBRARY_ROUTES)
  ],
  exports: [RouterModule],
  declarations: []
})
export class LibraryRoutingModule { }
