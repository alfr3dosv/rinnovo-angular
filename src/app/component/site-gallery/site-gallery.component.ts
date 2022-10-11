import { Component, OnInit } from '@angular/core';
import { GalleryPicture, GalleryResponse } from 'src/app/model/model';
import { PictureService } from 'src/app/service/picture.service';

@Component({
  selector: 'app-site-gallery',
  templateUrl: './site-gallery.component.html',
  styleUrls: ['./site-gallery.component.scss']
})
export class SiteGalleryComponent implements OnInit {
  gallery: GalleryPicture[] = [];
  galleryResponse: GalleryResponse|undefined;
  selectedPicture = '';
  selectedCategory = 'cocinas';

  constructor(private pictureService:PictureService) {

  }

  ngOnInit(): void {
    this.pictureService.getGallery().subscribe(res => {
      this.galleryResponse = res
      this.gallery = res.cocinas;
    })
  }

  openPicture(i: number) {
    console.log('abriendo', i);
    this.selectedPicture = this.gallery[i].image;
  }

  filtrarPor(category: string) {
    this.selectedCategory = category;
    if (this.selectedCategory == 'cocinas') {
      this.gallery = this.galleryResponse?.cocinas || [];
    } else if (this.selectedCategory == 'closets') {
      this.gallery = this.galleryResponse?.closets || [];
    } else if (this.selectedCategory == 'centros') {
      this.gallery = this.galleryResponse?.centros || [];
    }
  }
}
