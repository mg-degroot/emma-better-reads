import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IBook } from '@nx-emma-indiv/shared/api';
import { Injectable } from '@angular/core';
import { environment } from '@nx-emma-indiv/shared/util-env';

/**
 * See https://angular.io/guide/http#requesting-data-from-a-server
 */
export const httpOptions = {
    observe: 'body',
    responseType: 'json',
};

/**
 */
@Injectable()
export class BookService {

    //endpoint = 'http://localhost:3000/api/book';
    //endpoint = environment.dataApiUrl + '/book';
    endpoint = `${environment.dataApiUrl}/api/book`;

    constructor(private readonly http: HttpClient) {}

    /**
     * Get all items.
     *
     * @options options - optional URL queryparam options
     */
    public list(options?: any): Observable<IBook[] | null> {
        console.log(`list ${this.endpoint}`);

        return this.http
            .get<ApiResponse<IBook[]>>(this.endpoint, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                map((response: any) => response.results as IBook[]),
                tap(console.log),
                catchError(this.handleError)
            );
    }

    /**
     * Get a single item from the service.
     *
     */
    public read(id: string | null, options?: any): Observable<IBook> {
        console.log(`read ${this.endpoint}/${id}`);
        return this.http
            .get<ApiResponse<IBook>>(`${this.endpoint}/${id}`, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IBook),
                catchError(this.handleError)
            );
    }

    /**
     * Handle errors.
     */
    public handleError(error: HttpErrorResponse): Observable<any> {
        console.log('handleError in BookService', error);

        return throwError(() => new Error(error.message));
    }

    // public search(query: string): Observable<IBook[] | null> {
    //     console.log(`search ${this.endpoint}?q=${query}`);
    
    //     const options: any = {
    //         ...httpOptions,
    //         observe: 'body',
    //         params: { q: query },
    //     };
    
    //     return this.http
    //         .get<ApiResponse<IBook[]>>(this.endpoint, options)
    //         .pipe(
    //             map((response: any) => response.results as IBook[]),
    //             tap(console.log),
    //             catchError(this.handleError)
    //         );
    // }
}
