import { VideoType } from '../enums';

export interface IVideo {
  id: number;
  posterUrl: string;
  title: string;
  type: VideoType;
}
