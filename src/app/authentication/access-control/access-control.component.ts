import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AccountType } from 'src/app/shared/enums';
@Component({
    selector: 'app-access-control',
    templateUrl: './access-control.component.html',
    styleUrls: ['./access-control.component.css'],
})
export class AccessControlComponent {
    public AccountType = AccountType;

    accountType: AccountType;

    constructor(
        private router: Router,
        private route: ActivatedRoute
    ) {}

    onSelectAccountType(type: AccountType): void {
        this.accountType = type;
    }

    onLogin(): void {
        this.router.navigate(['..', 'login'], { relativeTo: this.route });
    }

    onCreateAccount(): void {
        this.router.navigate(['..', 'signup'], {
            relativeTo: this.route,
            queryParams: { type: this.accountType },
        });
    }
}
