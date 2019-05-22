import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SubscriptionComponent } from './components/subscription/subscription.component';
import { SubscriptionRoutingModule } from './subscription-routing.module';
import { PlanCardComponent } from './components/plan-card/plan-card.component';
import { SharedModule } from '../shared';

@NgModule({
  declarations: [
    SubscriptionComponent,
    PlanCardComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    SubscriptionRoutingModule
  ]
})
export class SubscriptionModule { }
