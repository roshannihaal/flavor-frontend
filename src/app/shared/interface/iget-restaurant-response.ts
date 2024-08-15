import { IRestaurant } from './irestaurant';

export interface IGetRestaurantResponse {
    message: string;
    data: {
        restaurants: IRestaurant[];
    };
}
