import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent implements OnInit {
  showDeleteConfirmation = false;

    user: IUser = {
      id: '',
      naam: '',
      email: '',
      geboortedatum: new Date(),
      straatnaam: '',
      huisnummer: 0,
      stad: '',
    }
    users: IUser[] | null = null;
    userId: string | null = null;

    constructor( 
      private route: ActivatedRoute, 
      private userService: UserService,
      private router: Router, 
      ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('id');

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
            // Navigate back to the user list
            this.router.navigate(['../../users'], { relativeTo: this.route });
          },
          error: (error) => {
            console.error('Error deleting user:', error);
          }
        });
      } else {
        console.error('User id is missing for deletion.');
      }
    }
}
