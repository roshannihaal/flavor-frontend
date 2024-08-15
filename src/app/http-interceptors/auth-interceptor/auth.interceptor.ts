import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor,
    HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
    // constructor() {}

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
        const token = sessionStorage.getItem('token');

        request = request.clone({
            url: environment.BACKEND_URL + request.url,
            setHeaders: {
                Authorization: `Bearer ${token}`,
            },
        });

        return new Observable(observer => {
            const subscription = next.handle(request).subscribe({
                next: event => {
                    if (event instanceof HttpResponse) {
                        observer.next(event);
                    }
                },
                error: (err: {
                    error: { message: string; statusCode: number };
                    status: number;
                }) => {
                    observer.error(err);
                },
                complete: () => {
                    observer.complete();
                },
            });
            return () => {
                subscription.unsubscribe();
            };
        });
    }
}
