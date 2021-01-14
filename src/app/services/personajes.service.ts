import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class PersonajesService {

    constructor(private http: HttpClient) { }

    get(casa: string) {
        return this.http.get('http://hp-api.herokuapp.com/api/characters/house/' + casa).pipe(map(response => response), catchError(this.handleError))
    }
    
    protected handleError(error: HttpErrorResponse) {
        // return an observable with a user friendly message
        return throwError('Error! Algo salió mal.');
    }
}
