import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAuctionListComponent } from './home-auction-list.component';

describe('HomeAuctionListComponent', () => {
  let component: HomeAuctionListComponent;
  let fixture: ComponentFixture<HomeAuctionListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HomeAuctionListComponent]
    });
    fixture = TestBed.createComponent(HomeAuctionListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
