import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CONSTANTS } from 'src/app/shared/constants';
import { AccountType } from 'src/app/shared/enums';
import { ISignup } from 'src/app/shared/interface/isignup';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
    selector: 'app-signup',
    templateUrl: './signup.component.html',
    styleUrls: ['./signup.component.css'],
})
export class SignupComponent implements OnInit {
    form: FormGroup;
    roleId: AccountType;

    constructor(
        private route: ActivatedRoute,
        private apiService: ApiService,
        private router: Router
    ) {}

    ngOnInit(): void {
        this.form = new FormGroup({
            personalDetails: new FormGroup({
                email: new FormControl(null, [Validators.required, Validators.email]),
                name: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(3),
                    Validators.maxLength(16),
                ]),
            }),
            passwords: new FormGroup({
                password: new FormControl(null, [
                    Validators.required,
                    Validators.minLength(8),
                    Validators.maxLength(20),
                ]),
                confirmPassword: new FormControl(null, [Validators.required]),
            }),
        });
        this.roleId = this.route.snapshot.queryParams.type;
    }

    validator(element: string): null | string {
        if (element === CONSTANTS.EMAIL) {
            if (this.form.get(`personalDetails.${CONSTANTS.EMAIL}`).touched) {
                if (
                    this.form.get(`personalDetails.${CONSTANTS.EMAIL}`).hasError(CONSTANTS.REQUIRED)
                ) {
                    return 'Email is required';
                } else if (
                    this.form.get(`personalDetails.${CONSTANTS.EMAIL}`).hasError(CONSTANTS.EMAIL)
                ) {
                    return 'Please enter a valid email address';
                }
            }
        } else if (element === CONSTANTS.NAME) {
            if (this.form.get(`personalDetails.${CONSTANTS.NAME}`).touched) {
                if (
                    this.form.get(`personalDetails.${CONSTANTS.NAME}`).hasError(CONSTANTS.REQUIRED)
                ) {
                    return 'Name is required';
                } else if (
                    this.form
                        .get(`personalDetails.${CONSTANTS.NAME}`)
                        .hasError(CONSTANTS.MIN_LENGTH)
                ) {
                    return 'Name should be at least 3 characters long';
                } else if (
                    this.form
                        .get(`personalDetails.${CONSTANTS.NAME}`)
                        .hasError(CONSTANTS.MAX_LENGTH)
                ) {
                    return 'Name should not exceed 16 characters';
                }
            }
        } else if (element === CONSTANTS.PASSWORD) {
            if (this.form.get(`passwords.${CONSTANTS.PASSWORD}`).touched) {
                if (this.form.get(`passwords.${CONSTANTS.PASSWORD}`).hasError(CONSTANTS.REQUIRED)) {
                    return 'Password is required';
                } else if (
                    this.form.get(`passwords.${CONSTANTS.PASSWORD}`).hasError(CONSTANTS.MIN_LENGTH)
                ) {
                    return 'Password should be at least 3 characters long';
                } else if (
                    this.form.get(`passwords.${CONSTANTS.PASSWORD}`).hasError(CONSTANTS.MAX_LENGTH)
                ) {
                    return 'Password should not exceed 20 characters';
                }
            }
        } else if (element === CONSTANTS.CONFIRM_PASSWORD) {
            if (
                this.form.get(`passwords.${CONSTANTS.CONFIRM_PASSWORD}`).touched &&
                this.form
                    .get(`passwords.${CONSTANTS.CONFIRM_PASSWORD}`)
                    .hasError(CONSTANTS.REQUIRED)
            ) {
                return 'Confirm Password is required';
            }
        }
        return null;
    }

    onLogin(): void {
        this.router.navigate(['..', 'login'], { relativeTo: this.route });
    }

    onSubmit(): void {
        const body: ISignup = {
            ...this.form.value.personalDetails,
            ...this.form.value.passwords,
            roleId: this.roleId,
        };
        this.apiService
            .signup(body)
            .subscribe((res: { message: string; data: { id: string; token: string } }) => {
                sessionStorage.setItem('token', res.data.token);
            });
    }
}
