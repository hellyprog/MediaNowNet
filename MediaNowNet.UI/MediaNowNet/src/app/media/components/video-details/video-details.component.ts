import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-video-details',
  templateUrl: './video-details.component.html',
  styleUrls: ['./video-details.component.scss']
})
export class VideoDetailsComponent implements OnInit {
  classes: string = null;

  constructor() {
    this.classes = 'video-details-component';
  }

  ngOnInit() {
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
