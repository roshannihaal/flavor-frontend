import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    {
        path: '',
        pathMatch: 'full',
        redirectTo: 'auth',
    },
    {
        path: 'auth',
        loadChildren: () =>
            import('./authentication/authentication.module').then(m => m.AuthenticationModule),
    },
    {
        path: 'home',
        loadChildren: () => import('./workspace/workspace.module').then(m => m.WorkspaceModule),
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
