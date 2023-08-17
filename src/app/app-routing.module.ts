import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeScreenComponent } from './contents/home-screen/home-screen.component';

export const routes: Routes = [
  {
    
    path: 'home', component: HomeScreenComponent
    // ,
    // loadChildren: () =>
    //   import('./contents/home-screen/home-screen.module').then(
    //     (m) => m.HomeScreenModule,
    //   ),
  },
  {
    
    path: '', component: HomeScreenComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
