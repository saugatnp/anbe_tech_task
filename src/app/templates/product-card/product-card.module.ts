import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductCardComponent } from './product-card.component';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { FormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ProductCardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ButtonModule,
    RatingModule
  ],
  exports: [
    ProductCardComponent
  ]
})
export class ProductCardModule { }
