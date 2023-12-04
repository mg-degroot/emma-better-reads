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
    _id: '',
    titel: '',
    cover: '',
    beschrijving: '',
    genre: '',
    origineletaal: '',
    publiceerdatum: new Date(),
    schrijver: {} as IWriter,
    paginas: 0,
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
        const selectedWriterId = this.selectedWriterId;
      
        // Controleer of er een schrijver is geselecteerd
        if (!selectedWriterId) {
          console.error('No writer selected.');
          return;
        }
      
        // Zoek de geselecteerde schrijver in de lijst van schrijvers
        const selectedWriter = this.writers.find(writer => writer._id === selectedWriterId);
      
        // Controleer of de schrijver is gevonden
        if (!selectedWriter) {
          console.error('Selected writer not found.');
          return;
        }
      
        // Kopieer het boekobject om wijzigingen te voorkomen
        const newBook: IBook = { ...this.book, schrijver: selectedWriter };
        
        // Log de waarde van book.cover voordat het wordt doorgegeven
        console.log('Book before creation:', newBook);
      
        // Roep de createBook-methode van de BookService aan
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
}
