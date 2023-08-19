import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import { routes } from './app-routing.module';
import { NavigationBarComponent } from './templates/navigation-bar/navigation-bar.component';
import { FooterComponent } from './templates/footer/footer.component';
import { MenubarModule } from 'primeng/menubar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ListboxModule } from 'primeng/listbox';





@NgModule({
  declarations: [
    AppComponent,
    NavigationBarComponent,
    FooterComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    ListboxModule,
    // RouterModule.forRoot(routes),
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
