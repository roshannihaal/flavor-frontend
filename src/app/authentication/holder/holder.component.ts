import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthAction } from 'src/app/shared/enums/auth-action.enum';

@Component({
    selector: 'app-holder',
    templateUrl: './holder.component.html',
    styleUrls: ['./holder.component.css'],
})
export class HolderComponent implements OnInit {
    auth: string;
    constructor(private router: Router) {}
    ngOnInit(): void {
        const parts = this.router.url.split('/');

        if (parts[parts.length - 1] === AuthAction.LOGIN) {
            this.auth = AuthAction.LOGIN;
        } else if (parts[parts.length - 1].startsWith(AuthAction.SIGNUP)) {
            this.auth = AuthAction.SIGNUP;
        }
    }
}
