import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit {
  classes: string = null;

  constructor() {
    this.classes = 'not-found-component';
  }

  @HostBinding('class') get class() {
    return this.classes;
  }

  ngOnInit() {
  }

}
