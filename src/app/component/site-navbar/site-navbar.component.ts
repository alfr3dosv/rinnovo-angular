import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-site-navbar',
  templateUrl: './site-navbar.component.html',
  styleUrls: ['./site-navbar.component.scss']
})
export class SiteNavbarComponent implements OnInit {
  active = false;
  constructor() { }

  ngOnInit(): void {
  }

}
