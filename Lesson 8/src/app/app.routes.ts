import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { BooksListComponent } from './books/books-list/books-list.component';
import { BookDetailsComponent } from './books/book-details/book-details.component';
import { EverySecondGuard } from './shared/guards/every-second.guard';

export const AppRoutes: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'books/:bookId', component: BookDetailsComponent },
    { path: 'books', component: BooksListComponent, canActivate: [EverySecondGuard] },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: '**',
        redirectTo: '/home',
        pathMatch: 'full'
    }
]
