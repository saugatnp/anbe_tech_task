import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuccessScreenComponent } from './success-screen.component';
import { ButtonModule } from 'primeng/button';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SuccessScreenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    RouterModule
  ]
})
export class SuccessScreenModule { }
