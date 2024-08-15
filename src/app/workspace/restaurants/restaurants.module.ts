import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RestaurantsRoutingModule } from './restaurants-routing.module';
import { RestaurantsListComponent } from './restaurants-list/restaurants-list.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
    declarations: [RestaurantsListComponent],
    imports: [CommonModule, RestaurantsRoutingModule, SharedModule],
})
export class RestaurantsModule {}
