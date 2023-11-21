import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-book-detail',
  templateUrl: 'book-detail.component.html',
  styleUrls: ['./book-detail.component.css'],
})

export class BookDetailComponent implements OnInit {
    books: IBook | null = null;
    bookId: string | null = null;

    constructor( private route: ActivatedRoute, private bookService: BookService ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.bookId = params.get('id');

        this.bookService.read(this.bookId).subscribe((observable) => 
          this.books = observable);
      });
    }
}
