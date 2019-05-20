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
  trendingFilms: IWatchable[];

  constructor(
    private titleService: Title,
    private userService: UserService
  ) {
    this.classes = 'home-component';
    this.titleService.setTitle('Home - MediaNowNet');
    this.showSubscriptionMessage = this.userService.login();
  }

  ngOnInit() {
    this.getTrendingLinks();
  }

  @HostBinding('class') get class() {
    return this.classes;
  }

  getTrendingLinks() {
    this.trendingFilms = [
      {
        title: 'Avengers Endgame',
        posterUrl: '../../../assets/posters/avengers_endgame.jpg'
      }, {
        title: 'Braveheart',
        posterUrl: '../../../assets/posters/braveheart.jpg'
      }, {
        title: 'Captain Marvel',
        posterUrl: '../../../assets/posters/captain_marvel.jpg'
      }, {
        title: 'It 2',
        posterUrl: '../../../assets/posters/it_2.jpg'
      }, {
        title: 'Venom',
        posterUrl: '../../../assets/posters/venom.jpg'
      }
    ];
  }
}
