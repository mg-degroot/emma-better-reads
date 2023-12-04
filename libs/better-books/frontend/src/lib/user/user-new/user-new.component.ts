import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-edit',
  templateUrl: 'user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})

export class UserNewComponent {
    user: IUser = {
      _id: '',
      naam: '',
      email: '',
      geboortedatum: new Date(),
      straatnaam: '',
      huisnummer: 0,
      stad: '',
      password: ''
    };

    constructor( 
      private route: ActivatedRoute, 
      private userService: UserService,
      private router: Router, 
    ) {}

    createUser(): void {
      this.userService.create(this.user).subscribe({
        next: (createdUser) => {
          console.log('User created successfully:', createdUser);
          this.router.navigate(['../../users']);
        },
        error: (error) => {
          console.error('Error creating user:', error);
        }
      });      
    }

    goBack(): void {
      this.router.navigate(['../../users']);
    }
}
