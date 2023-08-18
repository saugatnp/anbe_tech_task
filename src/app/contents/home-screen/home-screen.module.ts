import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeScreenComponent } from './home-screen.component';
import { ButtonModule } from 'primeng/button';
import { RippleModule } from 'primeng/ripple';
import { ProductCardModule } from 'src/app/templates/product-card/product-card.module';
import { HomeService } from 'src/app/services/home.service';




@NgModule({
  declarations: [
    HomeScreenComponent
  ],
  imports: [
    CommonModule,
    ButtonModule,
    ProductCardModule
  ],
  providers: [HomeService],
})
export class HomeScreenModule { }
