import { Component, OnInit, Input } from '@angular/core';
import { IWatchable } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {
  @Input() displayItems: IWatchable[];

  constructor() {}

  ngOnInit() {
  }
}
