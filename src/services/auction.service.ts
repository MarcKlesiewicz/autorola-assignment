import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuctionGroup } from 'src/models/auction.model';


@Injectable({
  providedIn: 'root'
})
export class AuctionService {
  private jsonDataUrl = 'assets/data/auctions.json';

  constructor(private http: HttpClient) { }

  getAuctionData(): Observable<AuctionGroup> {
    return this.http.get<AuctionGroup>(this.jsonDataUrl);
  }
}