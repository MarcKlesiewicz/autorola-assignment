import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuickSearchFilterModule } from '../quick-search-filter/quick-search-filter.module';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    QuickSearchFilterModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class HomeModule { }
