import { Component, OnInit, OnDestroy } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { Subscription } from 'rxjs';

@Component({
    selector: 'nx-emma-indiv-writer-list',
    templateUrl: './writer-list.component.html',
    styleUrls: ['./writer-list.component.css'],
})
export class WriterListComponent implements OnInit, OnDestroy {
    writers: IWriter[] | null = null;
    subscription: Subscription | undefined = undefined;

    constructor(private writerService: WriterService) {}

    ngOnInit(): void {
        this.subscription = this.writerService.list().subscribe((results) => {
            console.log(`results: ${results}`);
            this.writers = results;
        });
    }

    ngOnDestroy(): void {
        if (this.subscription) this.subscription.unsubscribe();
    }
}
