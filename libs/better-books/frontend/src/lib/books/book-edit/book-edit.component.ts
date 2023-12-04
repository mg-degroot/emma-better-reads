import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from '../../writer/writer.service';


@Component({
  selector: 'nx-emma-indiv-book-edit',
  templateUrl: 'book-edit.component.html',
  styleUrls: ['./book-edit.component.css'],
})

export class BookEditComponent implements OnInit {
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

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private writerService: WriterService,
      private router: Router,
    ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.bookId = params.get('_id');
          if (this.bookId) {
            this.bookService.read(this.bookId).subscribe((observable) => {
              this.book = observable;
            });
          }
      });
    }

    updateBook() {
      console.log('Updating book:', this.book);
      
      this.bookService.update(this.book).subscribe({
        next: (updatedBook) => {
          console.log('Book updated successfully:', updatedBook);
          this.router.navigate(['../../books', this.book._id]);
        },
        error: (error) => {
          console.error('Error updating book:', error);
        }
      });
      
    }

    goBack(): void {
      this.router.navigate(['../../books', this.book._id]);
    }

}
