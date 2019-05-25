import { IWatchable } from '../interfaces';

export class Movie implements IWatchable {
  public title: string;
  public posterUrl: string;
  public year: number;
}
