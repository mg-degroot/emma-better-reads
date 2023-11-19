import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nx-emma-indiv-about',
  templateUrl: './about.component.html',
  styles: [],
})

export class AboutComponent implements OnInit {
  title = 'better-books-web';

  imagePath?: string;

  ngOnInit(): void {
      this.imagePath = '/assets/Boekencasus.png';
  }
 
}
