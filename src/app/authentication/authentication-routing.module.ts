import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AccessControlComponent } from './access-control/access-control.component';
import { HolderComponent } from './holder/holder.component';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'get-started',
    },
    {
        path: 'login',
        component: HolderComponent,
    },
    {
        path: 'signup',
        component: HolderComponent,
    },
    {
        path: 'get-started',
        component: AccessControlComponent,
    },
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class AuthenticationRoutingModule {}
