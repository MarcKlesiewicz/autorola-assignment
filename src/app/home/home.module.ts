import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchFilterModule } from '../quick-search-filter/quick-search-filter.module';
import { HomeAuctionListModule } from '../home-auction-list/home-auction-list.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuickSearchFilterModule,
    HomeAuctionListModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
