import { Component, OnInit } from '@angular/core';
import { AuctionGroup } from 'src/models/auction.model';
import { AuctionService } from 'src/services/auction.service';

@Component({
  selector: 'home-auction-list',
  templateUrl: './home-auction-list.component.html',
  styleUrls: ['./home-auction-list.component.css']
})
export class HomeAuctionListComponent implements OnInit{
  auctionData: AuctionGroup | undefined;

  constructor(private auctionService: AuctionService) { }

  ngOnInit(): void {
    this.auctionService.getAuctionData().subscribe(data => {
      this.auctionData = data;
    });
    console.log(this.auctionData)
  }
}
