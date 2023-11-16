import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-edit',
  templateUrl: 'user-new.component.html',
  styleUrls: ['./user-new.component.css'],
})

export class UserNewComponent implements OnInit {
    users: IUser | null = null;
    userId: string | null = null;

    constructor( private route: ActivatedRoute, private userService: UserService ) {}

    ngOnInit(): void {
  
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('id');
        
          // Bestaande user
          this.userService.read(this.userId).subscribe((observable) => 
          this.users = observable);
      });
    }
}
