import { Component, OnInit } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-edit',
  templateUrl: 'writer-new.component.html',
  styleUrls: ['./writer-new.component.css'],
})

export class WriterNewComponent implements OnInit {
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
      private router: Router, 
      ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.writerId = params.get('id');
        
          // Bestaande writer
          this.writerService.read(this.writerId).subscribe((observable) => 
          this.writer = observable);
      });
    }

    createWriter(): void {
    
      this.writerService.create(this.writer).subscribe(
        (createdWriter) => {
          console.log('Writer created successfully:', createdWriter);
          this.router.navigate(['../../writers']);
        },
        (error) => {
          console.error('Error creating writer:', error);
        }
      );
    }
    
  
    goBack(): void {
      this.router.navigate(['../../writers']);
    }
}
