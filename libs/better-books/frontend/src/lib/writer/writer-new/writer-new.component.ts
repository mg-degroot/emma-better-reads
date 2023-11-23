import { Component, OnInit } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-edit',
  templateUrl: 'writer-new.component.html',
  styleUrls: ['./writer-new.component.css'],
})

export class WriterNewComponent implements OnInit {
    writers: IWriter | null = null;
    writerId: string | null = null;

    constructor( private route: ActivatedRoute, private writerService: WriterService ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.writerId = params.get('id');
        
          // Bestaande writer
          this.writerService.read(this.writerId).subscribe((observable) => 
          this.writers = observable);
      });
    }
}
