import { Component, OnInit, OnDestroy } from '@angular/core';
import { BookService } from '../book.service';
import { IBook } from '@nx-emma-indiv/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nx-emma-indiv-book-list',
    templateUrl: './book-list.component.html',
    styleUrls: ['./book-list.component.css'],
})
export class BookListComponent implements OnInit, OnDestroy {
    books: IBook[] | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private bookService: BookService) {}

    ngOnInit(): void {
        this.subscription = this.bookService.list().subscribe((results) => {
            console.log(`results: ${results}`);
            this.books = results;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }

}
