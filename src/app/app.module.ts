import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TradingDataViewComponent } from './components/trading-data-view/trading-data-view.component';
import {TableModule} from 'primeng/table';
import { ButtonModule } from 'primeng/button';

@NgModule({
  declarations: [
    AppComponent,
    TradingDataViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TableModule,
    ButtonModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
