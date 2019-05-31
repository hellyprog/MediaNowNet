import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { MediaRoutingModule } from './media-routing.module';
import { MovieDetailsComponent } from './components/movie-details/movie-details.component';

@NgModule({
  declarations: [MovieDetailsComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
