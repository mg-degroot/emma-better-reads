import { Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { map, catchError, tap } from 'rxjs/operators';
import { ApiResponse, IWriter } from '@nx-emma-indiv/shared/api';
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
export class WriterService {

    //endpoint = 'http://localhost:3000/api/writer';
    //endpoint = environment.dataApiUrl + '/writer';
    endpoint = `${environment.dataApiUrl}/api/writer`;

    constructor(private readonly http: HttpClient) {}

    /**
     * Get all items.
     *
     * @options options - optional URL queryparam options
     */
    public list(options?: any): Observable<IWriter[] | null> {
        console.log(`list ${this.endpoint}`);

        return this.http
            .get<ApiResponse<IWriter[]>>(this.endpoint, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                map((response: any) => response.results as IWriter[]),
                tap(console.log),
                catchError(this.handleError)
            );
    }

    /**
     * Get a single item from the service.
     *
     */
    public read(id: string | null, options?: any): Observable<IWriter> {
        console.log(`read ${this.endpoint}/${id}`);
        return this.http
            .get<ApiResponse<IWriter>>(`${this.endpoint}/${id}`, {
                ...options,
                ...httpOptions,
            })
            .pipe(
                tap(console.log),
                map((response: any) => response.results as IWriter),
                catchError(this.handleError)
            );
    }

    public create(writer: IWriter): Observable<IWriter> {
        console.log(`create ${this.endpoint}`);
    
        const httpOptions = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json',
          }),
        };
    
        return this.http
          .post<ApiResponse<IWriter>>(this.endpoint, writer, httpOptions)
          .pipe(
            tap(console.log),
            map((response: any) => response.results as IWriter),
            catchError(this.handleError)
          );
    }

    public update(writer: IWriter): Observable<IWriter> {
        console.log(`update ${this.endpoint}/${writer.id}`);
        return this.http
          .put<ApiResponse<IWriter>>(`${this.endpoint}/${writer.id}`, writer)
          .pipe(tap(console.log), catchError(this.handleError)
          );
    }

    public delete(writer: IWriter): Observable<IWriter> {
      console.log(`delete ${this.endpoint}/${writer.id}`);
      return this.http
        .delete<ApiResponse<IWriter>>(`${this.endpoint}/${writer.id}`)
        .pipe(tap(console.log), catchError(this.handleError));
    }

    /**
     * Handle errors.
     */
    public handleError(error: HttpErrorResponse): Observable<any> {
        console.log('handleError in WriterService', error);

        return throwError(() => new Error(error.message));
    }
}
