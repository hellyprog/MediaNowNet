import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes: string = null;

  constructor(private titleService: Title) {
    this.classes = 'not-found-component';
    this.titleService.setTitle('Page not found - MediaNowNet');
  }

  ngOnInit() {
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
