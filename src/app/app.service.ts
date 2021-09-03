import { Injectable } from '@angular/core';
import { Observable, of, from } from 'rxjs';
import { tap } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from '../environments/environment';

@Injectable()
export class AppService {
    AUTH_ENDPOINT = 'http://127.0.0.1:8000/login';
    
    isCorrect = false;
    constructor(private httpClient: HttpClient) {
    }

    isLoggedIn() {
        return localStorage.getItem('currentUser') ? true : false;
    }

    login(username: string, password: string): Observable<boolean> {

        // if username is valid (matches regex) and password length > 0

        let payload = { username, password };

        return this.httpClient.post(this.AUTH_ENDPOINT, payload)
            .pipe(
                map(res => this.handleResponse(res))
            );
        // if (username === "demo@financepeer.com" && password === "financepeer@123") {
        //     let user = {
        //         'username': username,
        //         'password': password
        //     }
        //     localStorage.setItem('currentUser', JSON.stringify(user));
        //     this.isCorrect = true;
        // }
        // return of(this.isCorrect);

    }
    private handleResponse(response: any) {
        let { name, username } = response;
        return true;
    }

    logout() {
        localStorage.removeItem('currentUser');
    }


}