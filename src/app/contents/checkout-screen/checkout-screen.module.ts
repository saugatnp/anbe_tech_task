import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CheckoutScreenComponent } from './checkout-screen.component';
import { InputTextModule } from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';


@NgModule({
  declarations: [
    CheckoutScreenComponent
  ],
  imports: [
    CommonModule,
    InputTextModule,
    RouterModule,
    FormsModule,
    DialogModule,
    ButtonModule
  ]
})
export class CheckoutScreenModule { }
