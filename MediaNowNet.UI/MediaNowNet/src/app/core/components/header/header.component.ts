import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveMenu = false;
  shouldChangeColor = false;

  constructor() { }

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

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.shouldChangeColor = !this.shouldChangeColor;
  }
}
