import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  classes: string = null;

  constructor(private titleService: Title) {
    this.classes = 'subscription-component';
    this.titleService.setTitle('Home - MediaNowNet');
  }

  ngOnInit() {
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
