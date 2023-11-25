import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-edit',
  templateUrl: 'user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})

export class UserNewComponent implements OnInit {
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
  
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('id');
        
          // Bestaande user
          this.userService.read(this.userId).subscribe((observable) => 
          this.user = observable);
      });
    }

    createUser(): void {
    
      this.userService.create(this.user).subscribe(
        (createdUser) => {
          console.log('User created successfully:', createdUser);
          this.router.navigate(['../../users']);
        },
        (error) => {
          console.error('Error creating user:', error);
        }
      );
    }
    
  
    goBack(): void {
      this.router.navigate(['../../users']);
    }
}
