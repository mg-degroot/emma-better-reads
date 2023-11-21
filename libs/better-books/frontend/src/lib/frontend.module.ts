import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import {RouterModule, RouterLink} from '@angular/router';

//import user
import { UserService } from './user/user.service';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserNewComponent } from './user/user-new/user-new.component';

//import book
import { BookService } from './books/book.service';
import { BookDetailComponent } from './books/book-detail/book-detail.component';
import { BookEditComponent } from './books/book-edit/book-edit.component';
import { BookNewComponent } from './books/book-new/book-new.component';
import { BookListComponent } from './books/book-list/book-list.component';



@NgModule({
  imports: [RouterModule, CommonModule, HttpClientModule, RouterLink],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent, UserNewComponent, AboutComponent, 
                BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent],
  providers: [UserService, BookService],
  exports: [UserListComponent, UserDetailComponent, UserEditComponent, UserNewComponent, AboutComponent, 
            BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent],
})
export class FeaturesModule {}