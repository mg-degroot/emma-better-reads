import { Component, OnInit } from '@angular/core';
import { AuthService } from '@nx-emma-indiv/better-books/frontend';
import { IUser } from '@nx-emma-indiv/shared/api';

@Component({
  selector: 'nx-emma-indiv-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  isLoggedIn = false;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.authService.currentUser$.subscribe((user: IUser | null) => {
      this.isLoggedIn = !!user;
    });
  }

  logout(): void {
    this.authService.logout();
  }
}
