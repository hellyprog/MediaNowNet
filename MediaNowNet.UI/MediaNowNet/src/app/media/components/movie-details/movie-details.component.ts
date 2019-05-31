import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.scss']
})
export class MovieDetailsComponent implements OnInit {
  classes: string = null;
  movie: Movie = null;

  constructor(private route: ActivatedRoute) {
    this.classes = 'movie-details-component';
    // this.movie = {
    //   id: +this.route.snapshot.paramMap.get('id'),
    //   title: 'IT 2',
    //   posterUrl: '../../../assets/posters/it_2.jpg'
    // };
  }

  ngOnInit() {
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
