import { Component, OnInit } from '@angular/core';
import { WriterService } from '../writer.service';
import { IWriter } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-writer-detail',
  templateUrl: 'writer-detail.component.html',
  styleUrls: ['./writer-detail.component.css'],
})

export class WriterDetailComponent implements OnInit {
    writers: IWriter | null = null;
    writerId: string | null = null;

    constructor( private route: ActivatedRoute, private writerService: WriterService ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.writerId = params.get('id');

        this.writerService.read(this.writerId).subscribe((observable) => 
          this.writers = observable);
      });
    }
}
