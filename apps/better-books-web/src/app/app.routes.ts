import { NgModule } from '@angular/core';
import { Route, RouterModule } from '@angular/router';
import { AboutComponent} from '@nx-emma-indiv/better-books/frontend';

import { UserListComponent, UserDetailComponent, UserEditComponent, UserNewComponent} from '@nx-emma-indiv/better-books/frontend';
import { BookListComponent, BookDetailComponent, BookEditComponent, BookNewComponent} from '@nx-emma-indiv/better-books/frontend';
import { WriterListComponent, WriterDetailComponent, WriterEditComponent, WriterNewComponent} from '@nx-emma-indiv/better-books/frontend';


export const appRoutes: Route[] = [
    {
        path: 'about',
        pathMatch: 'full',
        component: AboutComponent
    },

    //Writer routes
    { 
        path: "writers", 
        pathMatch: "full", 
        component: WriterListComponent },
    { 
        path: "newwriter", 
        pathMatch: "full", 
        component: WriterNewComponent },
    { 
        path: "writers/:id", 
        pathMatch: "full", 
        component: WriterDetailComponent },
    { 
        path: "writers/:id/edit", 
        pathMatch: "full", 
        component: WriterEditComponent },


    //User routes
    { 
        path: "users", 
        pathMatch: "full", 
        component: UserListComponent },
    { 
        path: "new", 
        pathMatch: "full", 
        component: UserNewComponent },
    { 
        path: "users/:id", 
        pathMatch: "full", 
        component: UserDetailComponent },
    { 
        path: "users/:id/edit", 
        pathMatch: "full", 
        component: UserEditComponent },
        
    //Book routes
    { 
        path: "books", 
        pathMatch: "full", 
        component: BookListComponent },
    { 
        path: "newbook", 
        pathMatch: "full", 
        component: BookNewComponent },
    { 
        path: "books/:id", 
        pathMatch: "full", 
        component: BookDetailComponent },
    { 
        path: "books/:id/editbook", 
        pathMatch: "full", 
        component: BookEditComponent },
   

];

@NgModule({
    imports: [RouterModule.forRoot(appRoutes)],
    exports: [RouterModule],
})

export class AppRoutingModule {}
