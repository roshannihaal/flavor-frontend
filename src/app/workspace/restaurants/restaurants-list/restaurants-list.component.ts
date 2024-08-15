import { Component, OnInit } from '@angular/core';
import { IGetRestaurantResponse, IRestaurant } from 'src/app/shared/interface';
import { ApiService } from 'src/app/shared/service/api.service';

@Component({
    selector: 'app-restaurants-list',
    templateUrl: './restaurants-list.component.html',
    styleUrls: ['./restaurants-list.component.css'],
})
export class RestaurantsListComponent implements OnInit {
    restaurants: IRestaurant[];

    skip: number;
    take: number;

    constructor(private apiService: ApiService) {}
    ngOnInit(): void {
        this.skip = 0;
        this.take = 10;
        this.getRestaurants();
    }

    getRestaurants(): void {
        this.apiService
            .getRestaurants(this.skip, this.take)
            .subscribe((res: IGetRestaurantResponse) => {
                if (this.restaurants?.length) {
                    this.restaurants = [...this.restaurants, ...res.data.restaurants];
                } else {
                    this.restaurants = res.data.restaurants;
                }
                this.skip += 10;
            });
    }
}
