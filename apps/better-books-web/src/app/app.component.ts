import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterOutlet } from '@angular/router';
import { FeaturesModule } from '@nx-emma-indiv/better-books/frontend';
import { UiModule } from '@nx-emma-indiv/ui';

@Component({
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLink, FeaturesModule, UiModule],
  selector: 'nx-emma-indiv-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'better-books-web';
}
