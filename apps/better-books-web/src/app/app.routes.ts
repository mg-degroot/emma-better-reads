import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent} from '@nx-emma-indiv/better-books/frontend';
import { UserListComponent } from '@nx-emma-indiv/better-books/frontend';
import { UserDetailComponent } from '@nx-emma-indiv/better-books/frontend';
import { UserEditComponent } from '@nx-emma-indiv/better-books/frontend';

export const appRoutes: Route[] = [
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent
    },
    { 
        path: "users", 
        pathMatch: "full", 
        component: UserListComponent },
    { 
        path: "users/:id", 
        pathMatch: "full", 
        component: UserDetailComponent },
    { 
        path: "users/:id/edit", 
        pathMatch: "full", 
        component: UserEditComponent },
   

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
