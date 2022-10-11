import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteHeroComponent } from './site-hero.component';

describe('SiteHeroComponent', () => {
  let component: SiteHeroComponent;
  let fixture: ComponentFixture<SiteHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteHeroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
