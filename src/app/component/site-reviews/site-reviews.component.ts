import { Component, OnInit } from '@angular/core';
import {faStar} from '@fortawesome/free-solid-svg-icons'
import { Review } from 'src/app/model/model';
import { ReviewService } from 'src/app/service/review.service';
@Component({
  selector: 'app-site-reviews',
  templateUrl: './site-reviews.component.html',
  styleUrls: ['./site-reviews.component.scss']
})
export class SiteReviewsComponent implements OnInit {
  faStar = faStar;
  reviews: Review[] = [];

  constructor(private reviewService: ReviewService) { }

  ngOnInit(): void {
    this.reviewService.getReviews().subscribe(r => this.reviews = r);
  }
}
