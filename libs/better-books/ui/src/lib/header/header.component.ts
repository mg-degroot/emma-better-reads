import { Component, OnInit } from '@angular/core';
import { AuthService } from '@nx-emma-indiv/better-books/frontend';
import { IUser } from '@nx-emma-indiv/shared/api';
import { Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;


  constructor(
    private authService: AuthService,
    private router: Router
    ) {}

    ngOnInit(): void {
      this.authService.currentUser$.subscribe((user: IUser | null) => {
        this.isLoggedIn = !!user;
      });
    }

  logout(): void {
    this.authService.logout();
  }

  // navigateToEditPage(): void {
  //   this.router.navigate([`/users/${this.userId}/edit`]);
  // }
}
