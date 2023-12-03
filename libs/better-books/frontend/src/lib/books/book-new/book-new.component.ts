import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook, IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { WriterService } from '../../writer/writer.service';

@Component({
  selector: 'nx-emma-indiv-book-edit',
  templateUrl: 'book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})

export class BookNewComponent implements OnInit {
  book: IBook = {
    id: '',
    titel: '',
    cover: '',
    beschrijving: '',
    genre: '',
    origineletaal: '',
    publiceerdatum: new Date(),
    schrijver: {} as IWriter, 
    paginas: 0,
  };

    books: IBook[] | null = null;
    bookId: string | null = null;
    writers: IWriter[] = [];
    selectedWriterId: string | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private bookService: BookService,
      private writerService : WriterService,
      private router: Router,
      ) {}

      ngOnInit(): void {
        this.route.paramMap.subscribe((params) => {
          this.bookId = params.get('id');
    
          // Bestaande book
          this.bookService.read(this.bookId).subscribe((observable) => (this.book = observable));
        });
        this.writerService.list().subscribe((writers) => {
          this.writers = writers?.sort((a, b) => a.schrijvernaam.localeCompare(b.schrijvernaam)) ?? [];
        });
      }
    
      createBook(): void {
        const selectedWriterId = this.selectedWriterId; // Use the declared property
        const selectedWriter = this.writers?.find((writer) => writer._id === selectedWriterId);
    
        if (selectedWriter) {
          this.book.schrijver = selectedWriter;
        } else {
          console.error('Selected writer not found.');
          return;
        }
    
        console.log('Book before creation:', this.book);
    
        this.bookService.create(this.book).subscribe(
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
}
