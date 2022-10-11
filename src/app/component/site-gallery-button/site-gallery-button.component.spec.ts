import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteGalleryButtonComponent } from './site-gallery-button.component';

describe('SiteGalleryButtonComponent', () => {
  let component: SiteGalleryButtonComponent;
  let fixture: ComponentFixture<SiteGalleryButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteGalleryButtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteGalleryButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
