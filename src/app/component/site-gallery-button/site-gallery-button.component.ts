import { Component, OnInit } from '@angular/core';
import { faImage } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-site-gallery-button',
  templateUrl: './site-gallery-button.component.html',
  styleUrls: ['./site-gallery-button.component.scss']
})
export class SiteGalleryButtonComponent implements OnInit {
  icons = {faImage}
  constructor() { }

  ngOnInit(): void {
  }

}
