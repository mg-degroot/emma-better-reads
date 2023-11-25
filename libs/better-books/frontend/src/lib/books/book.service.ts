import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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

    public create(book: IBook): Observable<IBook> {
        console.log(`create ${this.endpoint}`);
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
    
        return this.http
          .post<ApiResponse<IBook>>(this.endpoint, book, httpOptions)
          .pipe(
            tap(console.log),
            map((response: any) => response.results as IBook),
            catchError(this.handleError)
          );
    }

    public update(book: IBook): Observable<IBook> {
        console.log(`update ${this.endpoint}/${book.id}`);
        return this.http
          .put<ApiResponse<IBook>>(`${this.endpoint}/${book.id}`, book)
          .pipe(tap(console.log), catchError(this.handleError)
          );
    }

    public delete(book: IBook): Observable<IBook> {
      console.log(`delete ${this.endpoint}/${book.id}`);
      return this.http
        .delete<ApiResponse<IBook>>(`${this.endpoint}/${book.id}`)
        .pipe(tap(console.log), catchError(this.handleError));
    }

        /**
     * Handle errors.
     */
        public handleError(error: HttpErrorResponse): Observable<any> {
            console.log('handleError in BookService', error);
    
            return throwError(() => new Error(error.message));
        }
}
