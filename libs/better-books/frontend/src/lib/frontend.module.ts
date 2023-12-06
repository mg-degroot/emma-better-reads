import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import {RouterModule, RouterLink} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgSelectModule } from '@ng-select/ng-select';

//about-page
import { AboutComponent } from './about/about.component';

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
import { BookStatusComponent } from './books/book-status/book-status.component';

//import writer
import { WriterService } from './writer/writer.service';
import { WriterListComponent } from './writer/writer-list/writer-list.component';
import { WriterDetailComponent } from './writer/writer-detail/writer-detail.component';
import { WriterEditComponent } from './writer/writer-edit/writer-edit.component';
import { WriterNewComponent } from './writer/writer-new/writer-new.component';

//login and register
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { AuthService } from './auth/auth.service';


@NgModule({
  imports: [RouterModule, CommonModule, HttpClientModule, RouterLink, FormsModule, ReactiveFormsModule, NgSelectModule],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent, UserNewComponent, AboutComponent, 
                BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent, BookStatusComponent,
              WriterListComponent, WriterDetailComponent, WriterEditComponent, WriterNewComponent,
              RegisterComponent, LoginComponent],
  providers: [UserService, BookService, WriterService, AuthService],
  exports: [UserListComponent, UserDetailComponent, UserEditComponent, UserNewComponent, AboutComponent, 
            BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent, BookStatusComponent,
            WriterListComponent, WriterDetailComponent, WriterEditComponent, WriterNewComponent],
})
export class FeaturesModule {}