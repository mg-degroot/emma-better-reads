import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-edit',
  templateUrl: 'user-edit.component.html',
  styleUrls: ['./user-edit.component.css'],
})

export class UserEditComponent implements OnInit {
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
      ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('_id');
        
          // Bestaande user
          this.userService.read(this.userId).subscribe((observable) => 
          this.user = observable);
      });
    }

    updateUser() {
      console.log('Updating user:', this.user);
      
      this.userService.update(this.user).subscribe({
        next: (updatedUser) => {
          console.log('User updated successfully:', updatedUser);
          window.history.back();
        },
        error: (error) => {
          console.error('Error updating user:', error);
        }
      });
      
    }
    
    goBack(): void {
      window.history.back();
    }
}
