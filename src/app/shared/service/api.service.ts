import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '../constants';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    init(): Observable<{ message: string }> {
        return this.http.get<{ message: string }>(API_ROUTE.INIT);
    }

    login(body: {
        email: string;
        password: string;
    }): Observable<{ message: string; data: { id: string; token: string } }> {
        return this.http.post<{ message: string; data: { id: string; token: string } }>(
            API_ROUTE.LOGIN,
            body
        );
    }
}
