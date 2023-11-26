import { Component, OnInit } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-edit',
  templateUrl: 'writer-edit.component.html',
  styleUrls: ['./writer-edit.component.css'],
})

export class WriterEditComponent implements OnInit {
    writer: IWriter = {
      id: '',
      profielFoto: '',
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

    updateWriter() {
      this.writerService.update(this.writer).subscribe(
        () => {
          this.router.navigate(['../../writers', this.writer.id]);
        },
        (error) => {
          console.error('Error updating book:', error);
        }
      );
    }

    goBack(): void {
      this.router.navigate(['../../writers', this.writer.id]);
    }
}
