import { Component, OnInit } from '@angular/core';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import { Feature } from 'src/app/model/model';
import { FeatureService } from 'src/app/service/feature.service';

@Component({
  selector: 'app-site-features',
  templateUrl: './site-features.component.html',
  styleUrls: ['./site-features.component.scss']
})
export class SiteFeaturesComponent implements OnInit {
  icons = {
    faCheck
  };
  features: Feature[] = [];

  constructor(private featureService: FeatureService) { }

  ngOnInit(): void {
    this.featureService.getFeatures().subscribe(features => this.features = features);
  }

}
