import { ComponentFixture, TestBed } from '@angular/core/testing';

import { QuickSearchFilterComponent } from './quick-search-filter.component';

describe('QuickSearchFilterComponent', () => {
  let component: QuickSearchFilterComponent;
  let fixture: ComponentFixture<QuickSearchFilterComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [QuickSearchFilterComponent]
    });
    fixture = TestBed.createComponent(QuickSearchFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
