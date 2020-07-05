import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Hero } from '../interfaces/hero';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
    providedIn: 'root',
})
export class HeroService {

    constructor(private http: HttpClient) { }

    heroUrl = 'https://localhost:5001/api/Heros';

    addHero(hero): Observable<Hero> {
        return this.http.post<Hero>(this.heroUrl, hero, httpOptions);
    }


}
const httpOptions = {
    headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': 'my-auth-token'
    })
};

