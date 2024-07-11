import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
    selector: 'app-access-control',
    templateUrl: './access-control.component.html',
    styleUrls: ['./access-control.component.css'],
})
export class AccessControlComponent implements OnInit {
    auth: string;

    constructor(private router: Router) {}

    ngOnInit(): void {
        const parts = this.router.url.split('/');
        this.auth = parts[parts.length - 1];
    }
}
