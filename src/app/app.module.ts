import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuickSearchFilterComponent } from './quick-search-filter/quick-search-filter.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSelectModule }  from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import { AuctionsComponent } from './auctions/auctions.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    QuickSearchFilterComponent,
    AuctionsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class AppModule { }
