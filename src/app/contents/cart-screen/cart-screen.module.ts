import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartScreenComponent } from './cart-screen.component';
import { InputTextModule } from 'primeng/inputtext';
import { CheckboxModule } from 'primeng/checkbox';
import { RadioButtonModule } from 'primeng/radiobutton';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CartScreenComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    InputTextModule,
    CheckboxModule,
    RadioButtonModule,
    ButtonModule
  ]
})
export class CartScreenModule { }
