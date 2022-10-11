import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SiteWhatsappChatComponent } from './site-whatsapp-chat.component';

describe('SiteWhatsappChatComponent', () => {
  let component: SiteWhatsappChatComponent;
  let fixture: ComponentFixture<SiteWhatsappChatComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SiteWhatsappChatComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SiteWhatsappChatComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
