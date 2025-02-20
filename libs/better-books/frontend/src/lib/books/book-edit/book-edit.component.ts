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
    selectedWriterId: string | null = null;

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
    
            this.writerService.list().subscribe((writers) => {
                this.writers = writers?.sort((a, b) => a.schrijvernaam.localeCompare(b.schrijvernaam)) ?? [];
                console.log('Writers:', this.writers);
            });
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


    customSearch(term: string, item: any) {
      term = term.toLowerCase();
      return item.schrijvernaam.toLowerCase().includes(term);
    }

    checkFuturePublicationDate(): boolean {
      const currentDate = new Date();
      const inputDate = new Date(this.book.publiceerdatum);
    
      return inputDate > currentDate;
    }

    checkValidPageNumber(): boolean {
      return this.book.paginas > 0;
    }
}
