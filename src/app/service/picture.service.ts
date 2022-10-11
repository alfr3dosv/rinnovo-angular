import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryPicture, GalleryResponse } from '../model/model';

@Injectable({
  providedIn: 'root'
})
export class PictureService {

  constructor() { }

  getGallery(): Observable<GalleryResponse> {
    return of({
      cocinas: [
        { thumbnail: 'assets/img/galeria/cocinas/thumb-1CO20190116_154247.jpg', image: 'assets/img/galeria/cocinas/1CO20190116_154247.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190112_120651.jpg', image: 'assets/img/galeria/cocinas/CO20190112_120651.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CODSCF3389.jpg', image: 'assets/img/galeria/cocinas/CODSCF3389.JPG' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20200523_151704379.jpg', image: 'assets/img/galeria/cocinas/IMG_20200523_151704379.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-20190402_200600.jpg', image: 'assets/img/galeria/cocinas/20190402_200600.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20181101_164932.jpg', image: 'assets/img/galeria/cocinas/CO20181101_164932.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190112_120709.jpg', image: 'assets/img/galeria/cocinas/CO20190112_120709.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-COIMG_20161002_093231.jpg', image: 'assets/img/galeria/cocinas/COIMG_20161002_093231.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20200627_173503678.jpg', image: 'assets/img/galeria/cocinas/IMG_20200627_173503678.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-20190402_200715.jpg', image: 'assets/img/galeria/cocinas/20190402_200715.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20181113_181859.jpg', image: 'assets/img/galeria/cocinas/CO20181113_181859.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190116_154310.jpg', image: 'assets/img/galeria/cocinas/CO20190116_154310.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-COIMG-20170824-WA0026.jpg', image: 'assets/img/galeria/cocinas/COIMG-20170824-WA0026.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20200627_173602682.jpg', image: 'assets/img/galeria/cocinas/IMG_20200627_173602682.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-20190402_200851.jpg', image: 'assets/img/galeria/cocinas/20190402_200851.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20181213_152409.jpg', image: 'assets/img/galeria/cocinas/CO20181213_152409.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190116_154339.jpg', image: 'assets/img/galeria/cocinas/CO20190116_154339.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-COIMG-20170826-WA0011.jpg', image: 'assets/img/galeria/cocinas/COIMG-20170826-WA0011.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20200802_151437371.jpg', image: 'assets/img/galeria/cocinas/IMG_20200802_151437371.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-20191128_110639.jpg', image: 'assets/img/galeria/cocinas/20191128_110639.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20181213_152558.jpg', image: 'assets/img/galeria/cocinas/CO20181213_152558.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190129_180258.jpg', image: 'assets/img/galeria/cocinas/CO20190129_180258.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-COIMG-20170928-WA0011.jpg', image: 'assets/img/galeria/cocinas/COIMG-20170928-WA0011.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20201125_151530768.jpg', image: 'assets/img/galeria/cocinas/IMG_20201125_151530768.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-20191128_110730.jpg', image: 'assets/img/galeria/cocinas/20191128_110730.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190109_164917.jpg', image: 'assets/img/galeria/cocinas/CO20190109_164917.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CODSCF3266.jpg', image: 'assets/img/galeria/cocinas/CODSCF3266.JPG' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-COIMG-20170928-WA0012.jpg', image: 'assets/img/galeria/cocinas/COIMG-20170928-WA0012.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20220129_182234401.jpg', image: 'assets/img/galeria/cocinas/IMG_20220129_182234401.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20171228_122503.jpg', image: 'assets/img/galeria/cocinas/CO20171228_122503.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CO20190110_124211.jpg', image: 'assets/img/galeria/cocinas/CO20190110_124211.jpg' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-CODSCF3307.jpg', image: 'assets/img/galeria/cocinas/CODSCF3307.JPG' },
        { thumbnail: 'assets/img/galeria/cocinas/thumb-IMG_20200207_163320841.jpg', image: 'assets/img/galeria/cocinas/IMG_20200207_163320841.jpg' }
      ],
      closets: [
        { thumbnail: 'assets/img/galeria/closets/thumb-0ab.jpg', image: 'assets/img/galeria/closets/0ab.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-20190309_124111.jpg', image: 'assets/img/galeria/closets/20190309_124111.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20180509_124629.jpg', image: 'assets/img/galeria/closets/CL20180509_124629.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20181213_153430.jpg', image: 'assets/img/galeria/closets/CL20181213_153430.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-0closeEcon.jpg', image: 'assets/img/galeria/closets/0closeEcon.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-20191211_100328.jpg', image: 'assets/img/galeria/closets/20191211_100328.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20180509_124642.jpg', image: 'assets/img/galeria/closets/CL20180509_124642.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CLIMG_20161002_095418.jpg', image: 'assets/img/galeria/closets/CLIMG_20161002_095418.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-0corr1.jpg', image: 'assets/img/galeria/closets/0corr1.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20180509_124549.jpg', image: 'assets/img/galeria/closets/CL20180509_124549.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20180801_165814.jpg', image: 'assets/img/galeria/closets/CL20180801_165814.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CLIMG_20161002_095430.jpg', image: 'assets/img/galeria/closets/CLIMG_20161002_095430.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-20190309_123758.jpg', image: 'assets/img/galeria/closets/20190309_123758.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20180509_124602.jpg', image: 'assets/img/galeria/closets/CL20180509_124602.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-CL20181019_160036.jpg', image: 'assets/img/galeria/closets/CL20181019_160036.jpg' },
        { thumbnail: 'assets/img/galeria/closets/thumb-IMG_20200131_171238210.jpg', image: 'assets/img/galeria/closets/IMG_20200131_171238210.jpg' },
      ],
      centros: [
        { thumbnail: 'assets/img/galeria/centros/CE20171205_115147.jpg', image: 'assets/img/galeria/centros/CE20171205_115147.jpg' },
        { thumbnail: 'assets/img/galeria/centros/CE20180613_150606.jpg', image: 'assets/img/galeria/centros/CE20180613_150606.jpg' },
        { thumbnail: 'assets/img/galeria/centros/CE20181024_172936.jpg', image: 'assets/img/galeria/centros/CE20181024_172936.jpg' },
        { thumbnail: 'assets/img/galeria/centros/CE20180613_150515.jpg', image: 'assets/img/galeria/centros/CE20180613_150515.jpg' },
        { thumbnail: 'assets/img/galeria/centros/CE20180613_150624.jpg', image: 'assets/img/galeria/centros/CE20180613_150624.jpg' },
        { thumbnail: 'assets/img/galeria/centros/CE20181024_173047.jpg', image: 'assets/img/galeria/centros/CE20181024_173047.jpg' },
      ]
    })
  }
}
