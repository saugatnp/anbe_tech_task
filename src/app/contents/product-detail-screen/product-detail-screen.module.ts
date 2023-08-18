import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductDetailScreenComponent } from './product-detail-screen.component';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    ProductDetailScreenComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule
  ]
})
export class ProductDetailScreenModule { }
