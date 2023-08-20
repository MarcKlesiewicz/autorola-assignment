import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Route } from '@angular/router';

@Component({
  selector: 'app-auctions',
  templateUrl: './auctions.component.html',
  styleUrls: ['./auctions.component.css']
})
export class AuctionsComponent implements OnInit {
  constructor(private route: ActivatedRoute){}

  ngOnInit(): void {
    var makes: string[] = new (this.route.snapshot.params['makes']);
    var fuelTypes: string[] = new (this.route.snapshot.params['fuelTypes']);
    var countries: string[] = new (this.route.snapshot.params['countries']);
   
  }
}
