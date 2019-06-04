import { Component, OnInit, HostBinding } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Movie } from 'src/app/shared/models';
import { VoteStatus } from 'src/app/shared/enums/VoteStatus';

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
  }

  ngOnInit() {
    this.movie = new Movie();
    this.movie.id = +this.route.snapshot.paramMap.get('id');
    this.movie.title = 'IT 2';
    this.movie.posterUrl = '../../../assets/posters/it_2.jpg';
    this.movie.description = 'SOME COOL DESCRIPTION FOR THIS AMAZING VIDEO, I HAVE NO IDEA WHAT TO WRITE HERE';
    this.movie.genre = 'comedy';
    this.movie.year = 2016;
    this.movie.rating = 7.7;
    this.movie.upvotes = 1545;
    this.movie.downvotes = 345;
    this.movie.voteStatus = VoteStatus.None;
  }

  @HostBinding('class') get class() {
    return this.classes;
  }
}
