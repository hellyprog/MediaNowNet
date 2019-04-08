import { Component, OnInit, HostListener } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isActiveMenu = false;
  shouldColorChange = false;

  constructor() { }

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const offset = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;
    if (offset > 20) {
      this.shouldColorChange = true;
    } else {
      this.shouldColorChange = false;
    }
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.isActiveMenu = !this.isActiveMenu;
    this.shouldColorChange = !this.shouldColorChange;
  }
}
