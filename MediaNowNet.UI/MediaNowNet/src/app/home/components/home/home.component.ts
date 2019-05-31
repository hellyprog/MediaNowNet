import { Component, OnInit, HostBinding } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { UserService } from '../../../core/services/user/user.service';
import { IWatchable } from 'src/app/shared/interfaces';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  classes: string = null;
  showSubscriptionMessage: boolean;
  trendingFilms: IWatchable[];
  movies: IWatchable[];

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
        id: 1,
        title: 'Avengers Endgame',
        posterUrl: '../../../assets/posters/avengers_endgame.jpg'
      }, {
        id: 2,
        title: 'Braveheart',
        posterUrl: '../../../assets/posters/braveheart.jpg'
      }, {
        id: 3,
        title: 'Captain Marvel',
        posterUrl: '../../../assets/posters/captain_marvel.jpg'
      }, {
        id: 4,
        title: 'It 2',
        posterUrl: '../../../assets/posters/it_2.jpg'
      }, {
        id: 5,
        title: 'Venom',
        posterUrl: '../../../assets/posters/venom.jpg'
      }
    ];

    this.movies = [
      {
        id: 6,
        title: 'John Wick 3',
        posterUrl: '../../../assets/posters/john_wick_3.jpg'
      }, {
        id: 7,
        title: 'Punisher',
        posterUrl: '../../../assets/posters/punisher.jpg'
      }, {
        id: 8,
        title: 'Mission Impossible: Fallout',
        posterUrl: '../../../assets/posters/mission_impossible_fallout.jpg'
      }, {
        id: 9,
        title: 'Godzilla: King of Monsters',
        posterUrl: '../../../assets/posters/godzilla_king_of_monsters.jpg'
      }, {
        id: 10,
        title: 'Spider-Man: Into the Spider-Verse',
        posterUrl: '../../../assets/posters/spider_man_into_the_spider-verse.jpg'
      }
    ];
  }
}
