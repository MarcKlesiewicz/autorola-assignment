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

  allArticles = AuctionData.articles;

  articles: any[] = [];

  selectedMakeControl = new FormControl('');
  selectedFuelTypeControl = new FormControl('');
  selectedCountryControl = new FormControl('');

  onMakeSelectionChange(event: any) {
  this.selectedMakeControl.setValue(event.value);
  const selectedMakes: string[] = event.value;
  
  this.articles = this.allArticles.filter(article => {
      const articleHeadline = article.headline.toLowerCase();
      return selectedMakes.some(make => articleHeadline.includes(make.toLowerCase()));
  });
  }

  onFuelSelectionChange(event: any) {
  this.selectedFuelTypeControl.setValue(event.value);
  const selectedFuelTypes: string[] = event.value;
  
  this.articles = this.allArticles.filter(article => {
      const articleHeadline = article.details.toLowerCase();
      return selectedFuelTypes.some(fuelType => articleHeadline.includes(fuelType.toLowerCase()));
    });
  }

  onCountrySelectionChange(event: any) {
    this.selectedCountryControl.setValue(event.value);
  const selectedCountry: string[] = event.value;
  
  this.articles = this.allArticles.filter(article => {
    const articleHeadline = article.countryCode.toLowerCase();
    return selectedCountry.some(fuelType => articleHeadline.includes(fuelType.toLowerCase()));
  });
  
}

}
