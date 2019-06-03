import { Component, OnInit, Input } from '@angular/core';
import { IVideo } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';
import { VideoType } from '../../enums';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {
  @Input() displayItems: IVideo[];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  getDetails(item: IVideo) {
    const url = item.type === VideoType.Movie ? '/watch/movie' : '/watch/series';

    this.router.navigate([url, item.id]);
  }
}
