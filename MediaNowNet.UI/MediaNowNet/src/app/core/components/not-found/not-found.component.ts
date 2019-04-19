import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  classes: string = null;

  constructor(private titleService: Title) {
    this.classes = 'not-found-component';
    this.titleService.setTitle('Page not found - MediaNowNet');
  }

  @HostBinding('class') get class() {
    return this.classes;
  }

  ngOnInit() {
  }

}
