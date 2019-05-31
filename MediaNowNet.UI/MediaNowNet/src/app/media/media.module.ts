import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { MediaRoutingModule } from './media-routing.module';
import { VideoDetailsComponent } from './components/video-details/video-details.component';

@NgModule({
  declarations: [VideoDetailsComponent],
  imports: [
    CommonModule,
    MediaRoutingModule,
    SharedModule
  ]
})
export class MediaModule { }
