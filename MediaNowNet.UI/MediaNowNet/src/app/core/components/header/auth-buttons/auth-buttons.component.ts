import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';

@Component({
  selector: 'app-auth-buttons',
  templateUrl: './auth-buttons.component.html',
  styleUrls: ['./auth-buttons.component.scss']
})
export class AuthButtonsComponent implements OnInit {
  isUserLoggedIn = false;

  @Input() shouldChangeColor: boolean;

  constructor() { }

  ngOnInit() {
  }

  login() {
    this.isUserLoggedIn = true;
  }

  logout() {
    this.isUserLoggedIn = false;
  }
}
