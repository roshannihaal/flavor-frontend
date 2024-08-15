import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_ROUTE } from '../constants';
import { Observable } from 'rxjs';
import { IGetRestaurantResponse, ILogin } from '../interface';
import { ISignup } from '../interface/isignup';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    constructor(private http: HttpClient) {}

    init(): Observable<{ message: string }> {
        return this.http.get<{ message: string }>(API_ROUTE.INIT);
    }

    login(body: ILogin): Observable<{ message: string; data: { id: string; token: string } }> {
        return this.http.post<{ message: string; data: { id: string; token: string } }>(
            API_ROUTE.LOGIN,
            body
        );
    }

    signup(body: ISignup): Observable<{ message: string; data: { id: string; token: string } }> {
        return this.http.post<{ message: string; data: { id: string; token: string } }>(
            API_ROUTE.SIGNUP,
            body
        );
    }

    getRestaurants(skip: number, take: number): Observable<IGetRestaurantResponse> {
        return this.http.get<IGetRestaurantResponse>(API_ROUTE.GET_RESTAURANTS, {
            params: {
                skip,
                take,
            },
        });
    }
}
