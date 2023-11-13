import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';

import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
      path: 'user',
      pathMatch: 'full',
      component: UserListComponent
  },
  // Read bestaande user op basis van ID
  {
      path: ':id',
      pathMatch: 'full',
      component: UserDetailComponent
  }
]


@NgModule({
  imports: [RouterModule.forChild(routes), CommonModule, HttpClientModule],
  declarations: [UserListComponent, UserDetailComponent, AboutComponent],
  providers: [UserService],
  exports: [UserListComponent, UserDetailComponent, AboutComponent],
})
export class FeaturesModule {}