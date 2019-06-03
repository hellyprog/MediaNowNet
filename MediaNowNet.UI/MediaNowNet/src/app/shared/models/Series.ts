import { Season } from './Season';

export class Series {
  public description: string;
  public id: number;
  public posterUrl: string;
  public rating: number;
  public seasons: Season[];
  public title: string;
}
