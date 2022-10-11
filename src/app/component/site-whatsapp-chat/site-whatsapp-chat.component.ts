import { Component, OnInit } from '@angular/core';
import { faHeadset } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-site-whatsapp-chat',
  templateUrl: './site-whatsapp-chat.component.html',
  styleUrls: ['./site-whatsapp-chat.component.scss']
})
export class SiteWhatsappChatComponent implements OnInit {
  icons = {faHeadset}
  constructor() { }

  ngOnInit(): void {
  }

}