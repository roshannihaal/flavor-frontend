import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CONSTANTS } from 'src/app/shared/constants';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
    form: FormGroup;

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            email: new FormControl(null, [Validators.required, Validators.email]),
            password: new FormControl(null, [Validators.required]),
        });
    }

    validator(element: string): null | string {
        if (element === CONSTANTS.EMAIL) {
            if (this.form.get(CONSTANTS.EMAIL).touched) {
                if (this.form.get(CONSTANTS.EMAIL).hasError(CONSTANTS.REQUIRED)) {
                    return 'Email is required';
                } else if (this.form.get(CONSTANTS.EMAIL).hasError(CONSTANTS.EMAIL)) {
                    return 'Please enter a valid email address';
                }
            }
        } else {
            if (
                this.form.get(CONSTANTS.PASSWORD).touched &&
                this.form.get(CONSTANTS.PASSWORD).hasError(CONSTANTS.REQUIRED)
            ) {
                return 'Password is required';
            }
        }
        return null;
    }
    onSubmit(): void {
        const body = this.form.value;
        this.apiService.login(body).subscribe(
            (res: { message: string; data: { id: string; token: string } }) => {
                sessionStorage.setItem('token', res.data.token);
            },
            (error: HttpErrorResponse) => {
                if (error.status === CONSTANTS.FORBIDDEN) {
                    console.log('TODO');
                }
            }
        );
    }
}
