import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InputTextModule } from 'primeng/inputtext';
import { PasswordModule } from 'primeng/password';
import { ButtonModule } from 'primeng/button';
@NgModule({
    declarations: [],
    imports: [CommonModule],
    exports: [FormsModule, ReactiveFormsModule, InputTextModule, PasswordModule, ButtonModule],
})
export class SharedModule {}
