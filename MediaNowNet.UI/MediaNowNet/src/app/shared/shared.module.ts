import { NgModule } from '@angular/core';
import { ImageSlideshowComponent } from './components/image-slideshow/image-slideshow.component';
import { CommonModule } from '@angular/common';
import { RatingComponent } from './components/rating/rating.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageSlideshowComponent,
    RatingComponent
  ],
  declarations: [
    ImageSlideshowComponent,
    RatingComponent
  ],
  providers: [],
})
export class SharedModule { }
