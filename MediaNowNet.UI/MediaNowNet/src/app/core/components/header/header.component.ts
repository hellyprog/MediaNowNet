import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveMenu = false;
  isPageScrolled = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 100) {
      this.isPageScrolled = true;
    } else {
      this.isPageScrolled = false;
    }
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
  }
}
