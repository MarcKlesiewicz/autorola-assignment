import { Component, Input } from '@angular/core';
import { Auction } from 'src/models/auction.model';

@Component({
  selector: 'app-auction-card',
  templateUrl: './auction-card.component.html',
  styleUrls: ['./auction-card.component.css']
})
export class AuctionCardComponent {
  @Input() auction: Auction | undefined;
}
