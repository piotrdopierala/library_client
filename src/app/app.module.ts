import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BooksListComponent } from './books-list/books-list.component';
import { BooksService } from './books-service.service';
import { SideMenuComponent } from './side-menu/side-menu.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { LibraryRoutingModule } from './library-routing.module';
import { BookDetailsComponent } from './book-details/book-details.component';
import { BookCopiesComponent } from './book-copies/book-copies.component';

@NgModule({
  declarations: [
    AppComponent,
    BooksListComponent,
    SideMenuComponent,
    TopBarComponent,
    //LibraryRoutingModule,
    BookDetailsComponent,
    BookCopiesComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    //HttpModule,
    LibraryRoutingModule,
    HttpClientModule
  ],
  providers: [BooksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
