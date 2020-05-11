import { ModuleWithProviders, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { HomeModule } from './home/home.module';

import {
  SharedModule,
  FooterComponent,
  HeaderComponent,
} from './shared';
import { HomeComponent } from './home/home.component';

const rootRouting: ModuleWithProviders= RouterModule.forRoot([], { useHash:true});

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HeaderComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    HomeModule,
    rootRouting,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
