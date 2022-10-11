import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteReviewsComponent } from './site-reviews.component';

describe('SiteReviewsComponent', () => {
  let component: SiteReviewsComponent;
  let fixture: ComponentFixture<SiteReviewsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteReviewsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteReviewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
