import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';

@Component({
  selector: 'nx-emma-indiv-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {
  showDeleteConfirmation = false;

    user: IUser = {
      _id: '',
      naam: '',
      email: '',
      geboortedatum: new Date(),
      straatnaam: '',
      huisnummer: 0,
      stad: '',
      password: '',
      boekenlijst: []
    }
    users: IUser[] | null = null;
    userId: string | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private userService: UserService,
      private router: Router, 
      private authService: AuthService,
      ) {}

    ngOnInit(): void {

      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('_id');

        this.userService.read(this.userId).subscribe((observable) => 
          this.user = observable);
      });
    }

    deleteUser(): void {
      if (this.userId) {
        this.userService.delete(this.user).subscribe({
          next: () => {
            console.log('Book deleted successfully');

            // Close the confirmation dialog
            this.showDeleteConfirmation = false;
            
            this.authService.logout();
            // Navigate back to the dashboard
            this.router.navigate(['/'])
            
          },
          error: (error) => {
            console.error('Error deleting user:', error);
          }
        });
      } else {
        console.error('User _id is missing for deletion.');
      }
    }

    goBack(): void {
      window.history.back();
    }
}
