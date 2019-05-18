import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../core/services/user/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes: string = null;
  showSubscriptionMessage: boolean;

  constructor(
    private titleService: Title,
    private userService: UserService
  ) {
    this.classes = 'home-component';
    this.titleService.setTitle('Home - MediaNowNet');
    this.showSubscriptionMessage = this.userService.login();
  }

  ngOnInit() {
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
