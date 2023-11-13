import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent} from '@nx-emma-indiv/better-books/frontend';
import { UserListComponent } from '@nx-emma-indiv/better-books/frontend';

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

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
