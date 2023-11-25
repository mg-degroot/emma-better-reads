import { Component, OnInit } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-detail',
  templateUrl: 'writer-detail.component.html',
  styleUrls: ['./writer-detail.component.css'],
})

export class WriterDetailComponent implements OnInit {
  showDeleteConfirmation = false;

    writer: IWriter = {
      id: '',
      schrijvernaam: '',
      geboortedatum: new Date(),
      bio: '',
      geboorteplaats: '',
      moedertaal: '',
    }
    writers: IWriter[] | null = null;
    writerId: string | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private writerService: WriterService,
      private router: Router, ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.writerId = params.get('id');

        this.writerService.read(this.writerId).subscribe((observable) => 
          this.writer = observable);
      });
    }

    deleteWriter(): void {
      if (this.writerId) {
        // Assuming this.bookService.delete takes the book ID as a parameter
        this.writerService.delete(this.writer).subscribe({
          next: () => {
            console.log('Book deleted successfully');

            // Close the confirmation dialog
            this.showDeleteConfirmation = false;
            // Navigate back to the book list
            this.router.navigate(['../../writers'], { relativeTo: this.route });
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
