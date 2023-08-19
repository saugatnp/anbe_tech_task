import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './contents/home-screen/home-screen.component';
import { ProductDetailScreenComponent } from './contents/product-detail-screen/product-detail-screen.component';
import { CartScreenComponent } from './contents/cart-screen/cart-screen.component';
import { CheckoutScreenComponent } from './contents/checkout-screen/checkout-screen.component';
import { SuccessScreenComponent } from './contents/success-screen/success-screen.component';

export const routes: Routes = [
  {
    
    path: '', component: HomeScreenComponent,
    loadChildren: () =>
    import('./contents/home-screen/home-screen.module').then(
      (m) => m.HomeScreenModule,
    ),
  },
  {
    
    path: 'home', component: HomeScreenComponent,
    loadChildren: () =>
      import('./contents/home-screen/home-screen.module').then(
        (m) => m.HomeScreenModule,
      ),
  },
  {
    
    path: 'details/:id', component: ProductDetailScreenComponent,
    loadChildren: () =>
      import('./contents/product-detail-screen/product-detail-screen.module').then(
        (m) => m.ProductDetailScreenModule,
      ),
  },
  {
    
    path: 'cart', component: CartScreenComponent,
    loadChildren: () =>
      import('./contents/cart-screen/cart-screen.module').then(
        (m) => m.CartScreenModule,
      ),
  },
  {
    
    path: 'checkout', component: CheckoutScreenComponent,
    loadChildren: () =>
      import('./contents/checkout-screen/checkout-screen.module').then(
        (m) => m.CheckoutScreenModule,
      ),
  },
  {
    
    path: 'success', component: SuccessScreenComponent,
    loadChildren: () =>
      import('./contents/success-screen/success-screen.module').then(
        (m) => m.SuccessScreenModule,
      ),
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
