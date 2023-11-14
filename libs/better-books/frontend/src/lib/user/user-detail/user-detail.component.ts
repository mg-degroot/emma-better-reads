import { Component } from '@angular/core';
import { UserService } from '../user.service';
import { IUser } from '@nx-emma-indiv/shared/api';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'nx-emma-indiv-user-detail',
  templateUrl: 'user-detail.component.html',
  styleUrls: ['./user-detail.component.css'],
})

export class UserDetailComponent {
    users: IUser | null = null;
    userId: string | null = null;

    constructor( private route: ActivatedRoute, private userService: UserService ) {}

    ngOnInit(): void {
  
      // Deze manier maakt gebruik van RxJs Observables.
      // We komen hier bij services en HTTP op terug.
      this.route.paramMap.subscribe((params) => {
        this.userId = params.get('id');

        this.userService.read(this.userId).subscribe((observable) => 
          this.users = observable);
      });
    }
}
