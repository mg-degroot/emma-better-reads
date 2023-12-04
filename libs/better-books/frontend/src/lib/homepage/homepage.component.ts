import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-header',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
})
export class HomepageComponent  {
  constructor(
    private router: Router
    ) {}

    navigateToLogin(): void {
      this.router.navigate([`/user/login`]);
    }

    navigateToRegister(): void {
      this.router.navigate([`/register`]);
    }


  }


