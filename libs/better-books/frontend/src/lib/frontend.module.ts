import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserListComponent } from './user/user-list/user-list.component';
import { UserDetailComponent } from './user/user-detail/user-detail.component';
import { UserEditComponent } from './user/user-edit/user-edit.component';
import { UserService } from './user/user.service';
import { HttpClientModule } from '@angular/common/http';
import { AboutComponent } from './about/about.component';
import {RouterModule, RouterLink} from '@angular/router';



@NgModule({
  imports: [RouterModule, CommonModule, HttpClientModule, RouterLink],
  declarations: [UserListComponent, UserDetailComponent, UserEditComponent, AboutComponent],
  providers: [UserService],
  exports: [UserListComponent, UserDetailComponent, UserEditComponent, AboutComponent],
})
export class FeaturesModule {}