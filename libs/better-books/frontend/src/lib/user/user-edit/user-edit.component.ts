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

    updateUser() {
      this.userService.update(this.user).subscribe(
        () => {
          this.router.navigate(['../../users', this.user.id]);
        },
        (error) => {
          console.error('Error updating user:', error);
        }
      );
    }

    goBack(): void {
      this.router.navigate(['../../writers', this.user.id]);
    }
}
