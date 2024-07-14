import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ErrorComponent } from './error/error.component';
import { ConfirmDialogComponent } from './confirm-dialog/confirm-dialog.component';

import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
@NgModule({
    declarations: [ErrorComponent, ConfirmDialogComponent],
    imports: [CommonModule, ConfirmDialogModule],
    exports: [
        FormsModule,
        ReactiveFormsModule,
        InputTextModule,
        PasswordModule,
        ButtonModule,
        ErrorComponent,
        ConfirmDialogComponent,
    ],
})
export class SharedModule {}
