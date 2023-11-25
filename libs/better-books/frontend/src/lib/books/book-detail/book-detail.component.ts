import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'nx-emma-indiv-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})

export class BookDetailComponent implements OnInit {
    showDeleteConfirmation = false;

    book: IBook = {
      id: '',
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

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private router: Router,
      private location: Location ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.bookId = params.get('id');

        this.bookService.read(this.bookId).subscribe((observable) => 
          this.book = observable);
      });
    }


    
    deleteBook(): void {
      if (this.bookId) {
        // Assuming this.bookService.delete takes the book ID as a parameter
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
        console.error('Book id is missing for deletion.');
      }
    }
    

}
