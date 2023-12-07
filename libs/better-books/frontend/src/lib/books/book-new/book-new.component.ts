import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from '../../writer/writer.service';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'nx-emma-indiv-book-edit',
  templateUrl: 'book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})

export class BookNewComponent implements OnInit {
  book: IBook = {
    _id: '',
    titel: '',
    cover: '',
    beschrijving: '',
    genre: '',
    origineletaal: '',
    publiceerdatum: new Date(),
    schrijver: {} as IWriter,
    paginas: 1,
  };
  
  bookId: string | null = null;
  selectedWriterId: string | null = null;
  writers: IWriter[] = [];

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private writerService : WriterService,
      private router: Router,
      ) {}

      ngOnInit(): void {
        this.writerService.list().subscribe((writers) => {
          this.writers = writers?.sort((a, b) => a.schrijvernaam.localeCompare(b.schrijvernaam)) ?? [];
          console.log('Writers:', this.writers);
        });
      }
  
      createBook(): void {
        const selectedWriter = this.writers.find(writer => writer._id === this.selectedWriterId);
    
        if (!selectedWriter) {
            console.error('Selected writer not found.');
            return;
        }
    
        const newBook: IBook = { ...this.book, schrijver: selectedWriter };
    
        console.log('Book before creation:', newBook);
    
        this.bookService.create(newBook).subscribe(
            (createdBook) => {
                console.log('Book created successfully:', createdBook);
                this.router.navigate(['../../books'], { relativeTo: this.route });
            },
            (error) => {
                console.error('Error creating book:', error);
            }
        );
      }
      
      customSearch(term: string, item: any) {
        term = term.toLowerCase();
        return item.schrijvernaam.toLowerCase().includes(term);
      }
    
      goBack(): void {
        this.router.navigate(['../../books']);
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
