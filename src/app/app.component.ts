import { Component, OnInit } from '@angular/core';
import { ApiService } from './shared/service/api.service';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
    title = 'flavor_frontend';

    constructor(private apiService: ApiService) {}

    ngOnInit(): void {
        this.apiService.init().subscribe();
    }
}
