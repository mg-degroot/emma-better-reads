import { Component } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-edit',
  templateUrl: 'writer-new.component.html',
  styleUrls: ['./writer-new.component.css'],
})

export class WriterNewComponent {
  writer: IWriter = {
    _id: '',
    profielFoto: '',
    schrijvernaam: '',
    geboortedatum: new Date(),
    bio: '',
    geboorteplaats: '',
    moedertaal: '',
  }

    constructor( 
      private route: ActivatedRoute, 
      private writerService: WriterService,
      private router: Router, 
      ) {}


    createWriter(): void {
      this.writerService.create(this.writer).subscribe({
        next: (createdWriter) => {
          console.log('Writer created successfully:', createdWriter);
          this.router.navigate(['../../writers']);
        },
        error: (error) => {
          console.error('Error creating writer:', error);
        }
      });      
    }
    
  
    goBack(): void {
      this.router.navigate(['../../writers']);
    }

    checkFutureWriterDate(): boolean {
      const currentDate = new Date();
      const inputDate = new Date(this.writer.geboortedatum);
    
      return inputDate > currentDate;
    }
}
