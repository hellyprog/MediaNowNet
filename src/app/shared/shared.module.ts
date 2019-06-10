import { NgModule } from '@angular/core';
import { ImageSlideshowComponent } from './components/image-slideshow/image-slideshow.component';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';
import { CommentsComponent } from './components/comments/comments.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    CommentsComponent,
    ImageSlideshowComponent,
    RatingComponent
  ],
  declarations: [
    CommentsComponent,
    ImageSlideshowComponent,
    RatingComponent
  ],
  providers: [],
})
export class SharedModule { }
