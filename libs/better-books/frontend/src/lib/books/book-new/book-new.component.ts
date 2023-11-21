import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-book-edit',
  templateUrl: 'book-new.component.html',
  styleUrls: ['./book-new.component.css'],
})

export class BookNewComponent implements OnInit {
    books: IBook | null = null;
    bookId: string | null = null;

    constructor( private route: ActivatedRoute, private bookService: BookService ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.bookId = params.get('id');
        
          // Bestaande book
          this.bookService.read(this.bookId).subscribe((observable) => 
          this.books = observable);
      });
    }
}
