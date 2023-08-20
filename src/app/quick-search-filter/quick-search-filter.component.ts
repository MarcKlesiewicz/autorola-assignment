import { Component } from '@angular/core';
import FilterData from '../../assets/data/filters.json';
import AuctionData from '../../assets/data/auction.json';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'quick-search-filter',
  templateUrl: './quick-search-filter.component.html',
  styleUrls: ['./quick-search-filter.component.css']
})
export class QuickSearchFilterComponent {

  makesList = FilterData.filters[0].data.map(make => make.value).slice(1);
  fuelTypeList = FilterData.filters[1].data.map(fuel => fuel.value).slice(1);
  countryList = FilterData.filters[2].data.map(country => country.value).slice(1);

  allArticels = AuctionData.articles;

  articels: any[] = [];

  selectedMakeControl = new FormControl('');
  selectedFuelTypeControl = new FormControl('');
  selectedCountryControl = new FormControl('');

  

  
}


