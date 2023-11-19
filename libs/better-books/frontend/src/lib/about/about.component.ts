import { Component } from '@angular/core';

@Component({
  selector: 'nx-emma-indiv-about',
  templateUrl: './about.component.html',
  styles: [],
})

export class AboutComponent {
  title = 'better-books-web';

  imagePath?: string;
  constructor() {
    this.imagePath = 'assets/Boekencasus.png';
  }
}
