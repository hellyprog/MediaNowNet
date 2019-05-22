import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Plan } from 'src/app/shared';

@Component({
  selector: 'app-subscription',
  templateUrl: './subscription.component.html',
  styleUrls: ['./subscription.component.scss']
})
export class SubscriptionComponent implements OnInit {
  classes: string = null;
  plans: Plan[];

  constructor(private titleService: Title) {
    this.classes = 'subscription-component';
    this.titleService.setTitle('Home - MediaNowNet');
  }

  ngOnInit() {
    this.getPlans();
  }

  getPlans() {
    this.plans = [
      {
        name: 'MNN',
        price: 5.99,
        conditions: [
          'Get unlimited access to the MNN streaming library with limited or no ads.',
          'Watch on your favorite devices',
          'Switch plans or cancel anytime'
        ]
      }, {
        name: 'MNN+',
        price: 7.99,
        conditions: [
          'Get unlimited access to the MNN streaming library with limited or no ads.',
          'Use on multiple devices',
          'Watch on your favorite devices',
          'Switch plans or cancel anytime'
        ]
      }, {
        name: 'MNN Premium',
        price: 10.99,
        conditions: [
          'Get unlimited access to the MNN streaming library with limited or no ads.',
          'Use on multiple devices',
          'Trust period when price cannot be taken from payment card',
          'Watch on your favorite devices',
          'Switch plans or cancel anytime'
        ]
      }
    ];
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
