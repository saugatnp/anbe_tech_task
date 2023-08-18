import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './contents/home-screen/home-screen.component';
import { ProductDetailScreenComponent } from './contents/product-detail-screen/product-detail-screen.component';

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
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
