import { Season } from './Season';

export class Series {
  public id: number;
  public posterUrl: string;
  public rating: number;
  public seasons: Season[];
  public title: string;
}
