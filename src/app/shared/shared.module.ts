import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
@NgModule({
    declarations: [ErrorComponent, ConfirmDialogComponent, MenuBarComponent],
    imports: [CommonModule, ConfirmDialogModule],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ErrorComponent,
        ConfirmDialogComponent,
        MenuBarComponent,
        InfiniteScrollModule,
    ],
})
export class SharedModule {}
