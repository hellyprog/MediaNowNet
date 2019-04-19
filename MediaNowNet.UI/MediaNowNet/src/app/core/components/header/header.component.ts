import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isUserLoggedIn: boolean;
  isActiveMenu = false;
  shouldChangeColor = false;

  constructor() {
    this.isUserLoggedIn = localStorage.isLoggedIn;
  }

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
  }

  login() {
    localStorage.isLoggedIn = true;
    this.isUserLoggedIn = true;
  }

  logout() {
    localStorage.isLoggedIn = false;
    this.isUserLoggedIn = false;
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.shouldChangeColor = !this.shouldChangeColor;
  }
}
