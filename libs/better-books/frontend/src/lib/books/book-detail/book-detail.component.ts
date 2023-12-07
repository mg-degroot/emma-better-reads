import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter, IUser, Leesstatus } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { UserService } from '../../user/user.service';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'nx-emma-indiv-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})

export class BookDetailComponent implements OnInit {
    showDeleteConfirmation = false;
    showBookStatus = false;

    book: IBook = {
      _id: '',
      cover: '',
      titel: '',
      beschrijving: '',
      genre: '',
      origineletaal: '',
      publiceerdatum: new Date(),
      schrijver: {} as IWriter,
      paginas: 0,
    }
      books: IBook[] | null = null;
      bookId: string | null = null;
      writers: IWriter[] = [];
      userId: string | null = null;
      user: IUser | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private authService: |AuthService,
      private router: Router,
      private location: Location ) {}

      ngOnInit(): void {
        // Retrieve bookId from route parameter
        this.route.paramMap.subscribe((params) => {
          this.bookId = params.get('_id'); // Change this line
      
          // Retrieve user ID from AuthService
          this.authService.currentUser$.subscribe({
            next: (user: IUser | null) => {
              if (user) {
                this.userId = user._id;      
                // Now you have both bookId and userId, you can use them as needed.
      
                // Fetch book details using this.bookId
                this.bookService.read(this.bookId).subscribe((observable) => {
                  this.book = observable;
                });
              }
            },
            error: (error) => {
              console.error('Error getting user information:', error);
            },
          });
        });
      }

    deleteBook(): void {
      if (this.bookId) {
        this.bookService.delete(this.book).subscribe({
          next: () => {
            console.log('Book deleted successfully');

            // Close the confirmation dialog
            this.showDeleteConfirmation = false;
            // Navigate back to the book list
            this.router.navigate(['../../books'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error deleting book:', error);
          }
        });
      } else {
        console.error('Book _id is missing for deletion.');
      }
    }

}
