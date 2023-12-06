import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter, IUser, Leesstatus } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'nx-emma-indiv-book-status',
  templateUrl: 'book-status.component.html',
  styleUrls: ['./book-status.component.css'],
})

export class BookStatusComponent implements OnInit {

      bookId: string | null = null;
      userId: string | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private authService: |AuthService) {}

      ngOnInit(): void {
        // Retrieve bookId from route parameter
        this.route.paramMap.subscribe((params) => {
          this.bookId = params.get('_id');
      
          // Retrieve user ID from AuthService
          this.authService.currentUser$.subscribe({
            next: (user: IUser | null) => {
              if (user) {
                this.userId = user._id;
              }
            },
            error: (error) => {
              console.error('Error getting user information:', error);
            },
          });
        });
      }


      addOrUpdateLeesstatus(leesstatus: string) {
        console.log('Starting addOrUpdateLeesstatus method');

        this.authService.currentUser$.subscribe({
          next: (user: IUser | null) => {
            if (!user || !user._id) {
              console.error('User information or User _id is missing or invalid');
              return;
            }
      
            console.log('User ID:', user._id);
      
            this.bookService.addOrUpdateLeesstatus(user._id, this.bookId!, leesstatus as Leesstatus).subscribe({
              next: (updatedUser: IUser) => {
                console.log(`Leesstatus "${leesstatus}" added or updated:`, updatedUser);
              },
              error: (error) => {
                console.error('Error adding or updating leesstatus:', error);
              }
            });
      
            console.log('Exiting addOrUpdateLeesstatus method');
          },
          error: (error) => {
            console.error('Error getting user information:', error);
          }
        });
      }
      
      // addOrUpdateLeesstatus(leesstatus: string) {
      //   console.log('Starting addOrUpdateLeesstatus method');
      
      //   this.authService.currentUser$.subscribe({
      //     next: (user: IUser | null) => {
      //       if (!user || !user._id) {
      //         console.error('User information or User _id is missing or invalid');
      //         return;
      //       }
      
      //       console.log('User ID:', user._id);
      
      //       // Check if the bookId is already in the user's array
      //       const bookIndex = user.boekenlijst.findIndex((book) => book.boekId === this.bookId);
      
      //       if (bookIndex === -1) {
      //         // If the bookId is not in the array, add it using POST
      //         this.bookService.addOrUpdateLeesstatus(user._id, this.bookId!, leesstatus as Leesstatus).subscribe({
      //           next: (updatedUser: IUser) => {
      //             console.log(`Leesstatus "${leesstatus}" added:`, updatedUser);
      //           },
      //           error: (error) => {
      //             console.error('Error adding leesstatus:', error);
      //           }
      //         });
      //       } else {
      //         // If the bookId is in the array, update its leesstatus using PUT
      //         this.bookService.updateLeesstatus(user._id, this.bookId!, leesstatus as Leesstatus).subscribe({
      //           next: (updatedUser: IUser) => {
      //             console.log(`Leesstatus "${leesstatus}" updated:`, updatedUser);
      //           },
      //           error: (error) => {
      //             console.error('Error updating leesstatus:', error);
      //           }
      //         });
      //       }
      
      //       console.log('Exiting addOrUpdateLeesstatus method');
      //     },
      //     error: (error) => {
      //       console.error('Error getting user information:', error);
      //     }
      //   });
      // }
      
    
    
    deleteBookBooklist() {
      this.authService.currentUser$.subscribe((user: IUser | null) => {
        if (user && this.bookId) {
          this.bookService
            .removeBookFromBookList(user._id, this.bookId)
            .subscribe(
              (updatedUser: IUser) => {
                console.log('Book removed from the booklist:', updatedUser);
              },
              (error) => {
                console.error('Error removing book from booklist:', error);
              }
            );
        }
      });
    }
}
