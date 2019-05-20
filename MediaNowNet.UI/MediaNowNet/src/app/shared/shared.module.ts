import { NgModule } from '@angular/core';
import { ImageSlideshowComponent } from './components/image-slideshow/image-slideshow.component';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [
    ImageSlideshowComponent
  ],
  declarations: [
    ImageSlideshowComponent
  ],
  providers: [],
})
export class SharedModule { }
