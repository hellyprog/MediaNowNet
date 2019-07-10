import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {
  classes: string = null;

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.classes = 'about-component';
    this.titleService.setTitle('About - MediaNowNet');
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
