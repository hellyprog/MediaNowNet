import { Component, OnInit, Input } from '@angular/core';
import { IWatchable } from 'src/app/shared/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-image-slideshow',
  templateUrl: './image-slideshow.component.html',
  styleUrls: ['./image-slideshow.component.scss']
})
export class ImageSlideshowComponent implements OnInit {
  @Input() displayItems: IWatchable[];

  constructor(private router: Router) {}

  ngOnInit() {
  }

  getDetails(id: number) {
    this.router.navigate(['/watch', id]);
  }
}
