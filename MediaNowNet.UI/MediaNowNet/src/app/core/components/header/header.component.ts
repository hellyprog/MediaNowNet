import { Component, OnInit, HostListener, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
//import { UserService } from '../../services/user/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn = false;
  isActiveMenu = false;
  shouldChangeColor = false;
  displayValue: string;
  userService: any;
  constructor(
    //private userService: UserService
  ) { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

    if (offset > 1) {
      this.shouldChangeColor = true;
    } else {
      if (!this.isActiveMenu) {
        this.shouldChangeColor = false;
      }
    }
  }

  ngOnInit() {
    this.isLoggedIn();
  }

  login() {
    const { userService } = this;
    this.isUserLoggedIn = userService.login();
    this.isLoggedIn();
  }

  logout() {
    const { userService } = this;
    this.isUserLoggedIn = userService.logout();
    this.isLoggedIn();
  }

  isLoggedIn() {
    if (this.isUserLoggedIn) {
      this.displayValue = 'Logout';
    } else {
      this.displayValue = 'Login';
    }
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.shouldChangeColor = !this.shouldChangeColor;
  }
}
